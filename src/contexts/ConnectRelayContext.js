import React, { createContext, useState, useEffect, useContext } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";

//ToDo: change logic to make this connect to the relaychain node spawned by Portico
const ROCOCO_RPC ='wss://rococo-rpc.polkadot.io'

const ApiContextRC = createContext();

export function ApiConnectRC ({ children }) {
    const [api, setConnectedApi] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [provider, setProvider] = useState(null);

    // by default this connects to Polkadot
    useEffect(() =>{
        const startApi = async () => {
            await selectNetworkRPC(ROCOCO_RPC);
        }
        if(!provider){
            startApi();
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