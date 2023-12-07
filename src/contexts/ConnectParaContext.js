import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useLocalStorageContext } from './LocalStorageContext';
import useHealthCheck from '../hooks/useHealhCheck';
import useApiSubscription from '../hooks/unSubHook';

const ApiContextPara = createContext();

export function ApiConnectPara ({ children }) {
    const { network, restart} = useLocalStorageContext();
    const [api, setConnectedApi] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [provider, setProvider] = useState(null);
    const [paraID, setParaID] = useState(null);
    const [paraHeadInfo, setParaHeadInfo] = useState([])
    const [tokenSymbol, setTokenSymbol] = useState(null);

    useEffect(() =>{
        const startApi = async (wsUri) => {
            await selectNetworkRPC(wsUri);
        }

        const getParaID = async () => {
            const _paraID = (await api.query.parachainInfo.parachainId()).toNumber()
            setParaID(_paraID)
        }

        const firstParasKey = Object.keys(network?.paras || {})[0];
        const wsUri = network?.paras?.[firstParasKey]?.[0]?.wsUri;
        if(!provider && wsUri){
            startApi(wsUri);
        }

        if (api) {
            getParaID();
        }

    }, [network, api, isReady])

    const getNewParaHeads = useCallback(() => {
        if(api){
          return api.rpc.chain.subscribeNewHeads((lastHeader) => {
            const head =  lastHeader.toHuman().number
            const headHash = lastHeader.hash.toHuman()
            //TODO: have state saved only until 10 blocks, no need to show more.
            setParaHeadInfo(oldHeadInfo => [{head, headHash}, ...oldHeadInfo])
          })
        }
    }, [api]);


    useEffect(() => {
        const getSymbol = async () => {
            const tokenSymbol = await api.registry.chainTokens;
            setTokenSymbol(tokenSymbol[0]);
        }
        if(api){
            getSymbol()
        }
    }, [isReady, api]);

    useApiSubscription(getNewParaHeads, isReady);
    
    useHealthCheck(async ()=> {restart(); cleanupState()},network);

    //CONNECTS TO RPC
    const selectNetworkRPC = async (rpc) => {
        
        //If user changes network it will first disconnect the current ws connection.
        if(provider){
            await provider.disconnect();
        }

        if(rpc){
            const newProvider = new WsProvider(rpc);
            setProvider(newProvider)
            const _api = await ApiPromise.create({ provider: newProvider });
            setIsReady(_api._isReady);
            setConnectedApi(_api)
        }
    };

    //State cleaner to be used when changing networks
    const cleanupState = async () => {
        setIsReady(false);
        setConnectedApi(null);
        setProvider(null)
        await provider.disconnect();
    }

    return (
        <ApiContextPara.Provider value={{api, isReady, paraID, paraHeadInfo,tokenSymbol}}>
            { children }
        </ApiContextPara.Provider>
    );
};

export function useApiContextPara () {
    return useContext(ApiContextPara)
}