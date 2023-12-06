import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useLocalStorageContext } from './LocalStorageContext';
import { useApiContextPara } from './ConnectParaContext'
import useHealthCheck from '../hooks/useHealhCheck';
import useApiSubscription from '../hooks/unSubHook';
import { Keyring } from "@polkadot/keyring";

import { parseSchedule } from '../utilities/parseSchedule'

const ApiContextRC = createContext();

export function ApiConnectRC ({ children }) {
    const { network, restart, setCoretime, coretime } = useLocalStorageContext();
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

    const scheduleCall = async () => {
        if(!paraID) return;
        const lastScheduledBlock = rcHeadInfo * (coretime.amount * coretime.every);
        const scheduledBlock = parseInt(rcHeadInfo) + parseInt(10);
        const id = [212,53,147,199,21,253,211,28,97,20,26,189,4,169,159,214,130,44,133,88,133,76,205,227,154,86,132,231,165,109,162,125];
          const keyring = new Keyring({ type: 'sr25519' })
          const alice = keyring.addFromUri('//Alice');
          const onDemandCall = api.tx.onDemandAssignmentProvider.forcePlaceOrder(alice.address,10000001, paraID);
          const schedule = api.tx.scheduler.scheduleNamed(id, scheduledBlock, [coretime.every,coretime.amount], 0, onDemandCall);
      
          await api.tx.sudo
          .sudo(
            schedule
          )
          .signAndSend(alice,({ events = [], status }) => {
            if (status.isInBlock) {
              console.log('Successful schedule with hash ' + status.asInBlock.toHex());
              setCoretime({...coretime, scheduled: true, lastBlock: lastScheduledBlock})
            } else {
              console.log('Status of schedule: ' + status.type);
            }
        
          events.forEach(({ phase, event: { data, method, section } }) => {
            console.log(phase.toString() + ' : ' + section + '.' + method + ' ' + data.toString());
          });
        });
    }

    useEffect(() => {
        const schedule = async () => {
            await scheduleCall()
        }
        if (isReady && api && coretime.scheduled === false) {
            schedule()
        }
    },[isReady,api,rcHeadInfo])

    return (
        <ApiContextRC.Provider value={{api, isReady, coretimeLeft, paraHead, paraCodeHash, scheduleCall}}>
            { children }
        </ApiContextRC.Provider>
    );
};

export function useApiContextRC () {
    return useContext(ApiContextRC)
}