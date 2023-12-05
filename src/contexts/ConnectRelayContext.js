import React, { createContext, useState, useEffect, useContext } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useLocalStorageContext } from './LocalStorageContext';

const ApiContextRC = createContext();

export function ApiConnectRC ({ children }) {
    const { network } = useLocalStorageContext();
    const [api, setConnectedApi] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [provider, setProvider] = useState(null);

    // by default this connects to Polkadot
    useEffect(() =>{
        const startApi = async () => {
            await selectNetworkRPC(wsUri);
        }
        const wsUri = network?.relay?.[0]?.wsUri;
        if(!provider && wsUri){
            startApi(wsUri);
        }
    })

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
    const cleanupState = () => {
        setIsReady(false);
        setConnectedApi(null);
        setProvider(null)
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