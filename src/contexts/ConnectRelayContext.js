import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useLocalStorageContext } from './LocalStorageContext';
import { useApiContextPara } from './ConnectParaContext'
import useHealthCheck from '../hooks/useHealhCheck';
import useApiSubscription from '../hooks/unSubHook';

import { parseSchedule } from '../utilities/parseSchedule'

const ApiContextRC = createContext();

export function ApiConnectRC ({ children }) {
    const { network, restart } = useLocalStorageContext();
    const { paraID } = useApiContextPara();

    const [api, setConnectedApi] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [provider, setProvider] = useState(null);
    const [rcHeadInfo, setrcHeadInfo] = useState(null);
    const [coretimeLeft, setCoretimeLeft] = useState(null);
    const [paraHead, setParaHead] = useState(null);
    const [paraCodeHash, setParaCodeHash] = useState(null);

    useEffect(() =>{
        const startApi = async () => {
            await selectNetworkRPC(wsUri);
        }
        const wsUri = network?.relay?.[0]?.wsUri;
        if(!provider && wsUri){
            startApi(wsUri);
        }
        const getSchedule = async () => {
          const schedule = await api.query.scheduler.agenda.entries();
          const _coretimeLeft = parseSchedule(schedule, api, paraID)
          setCoretimeLeft(_coretimeLeft)
        }
    
        const getParaHead = async () => {
          const _paraHead = await (await api.query.paras.heads(paraID)).toHuman()
          setParaHead(_paraHead)
        }
    
        const getParaCodeHash = async () => {
          const _paraCodeHash = await (await api.query.paras.currentCodeHash(paraID)).toHuman()
          setParaCodeHash(_paraCodeHash)
        }
    
        if(api && paraID) {
          getSchedule();
          getParaHead();
          getParaCodeHash();
        }
    }, [network, api, paraID, rcHeadInfo])

    //Get relaychainHead information
    const getNewRCHeads = useCallback(() => {
        if(api){
        return api.rpc.chain.subscribeNewHeads((lastHeader) => {
            const head =  lastHeader.toHuman().number
            setrcHeadInfo(head)
        })
        }
    }, [api]);

  useApiSubscription(getNewRCHeads, isReady);

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
    const cleanupState = async  () => {
        setIsReady(false);
        setConnectedApi(null);
        setProvider(null)
        await provider.disconnect();
    }

    return (
        <ApiContextRC.Provider value={{api, isReady, coretimeLeft, paraHead, paraCodeHash}}>
            { children }
        </ApiContextRC.Provider>
    );
};

export function useApiContextRC () {
    return useContext(ApiContextRC)
}