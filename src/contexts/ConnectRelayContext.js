import React, { createContext, useState, useEffect, useContext } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useLocalStorageContext } from './LocalStorageContext';
import useHealthCheck from '../hooks/useHealhCheck';

const ApiContextRC = createContext();

export function ApiConnectRC ({ children }) {
    const { network, restart } = useLocalStorageContext();
    const [api, setConnectedApi] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [provider, setProvider] = useState(null);

    useEffect(() =>{
        const startApi = async () => {
            await selectNetworkRPC(wsUri);
        }
        const wsUri = network?.relay?.[0]?.wsUri;
        if(!provider && wsUri){
            startApi(wsUri);
        }
    }, [network])

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
        <ApiContextRC.Provider value={{api, isReady}}>
            { children }
        </ApiContextRC.Provider>
    );
};

export function useApiContextRC () {
    return useContext(ApiContextRC)
}