import React, {useState, useEffect} from 'react'
import './ConsoleOutput.css';
import { createTestPairs } from '@polkadot/keyring'
import { ChopsticksProvider, setStorage, setup } from '@acala-network/chopsticks-core'
import { IdbDatabase } from '@acala-network/chopsticks-db/browser'
import { ApiPromise } from '@polkadot/api'
import { useLocalStorageContext } from '../../contexts/LocalStorageContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'

const RuntimeUpgrade = () => {
  const {network} = useLocalStorageContext();
  const {paraID, paraHeadInfo} = useApiContextPara();
	const [chainLoading, setChainLoading] = useState(false)
  const [blocks, setBlocks] = useState([])
	const [config, setConfig] = useState({
		endpoint: 'ws://127.0.0.1:50877',
		block: 10,
	})
  const [chopsticksApi, setChopsticksApi] = useState(null)
  const [chain, setChain] = useState(null)
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { alice, bob } = createTestPairs()
  const [runtimeVersions, setRuntimeVersions] = useState([])

  const [lines, setLines] = useState([]);
  

  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (!file) {
          return;
      }

      setLoading(true);
      const reader = new FileReader();

      reader.onload = (e) => {
          setFileContent(e.target.result);
          setLoading(false);
      };

      reader.onerror = (e) => {
          console.error('Error reading file:', e);
          setLoading(false);
      };

      reader.readAsText(file);
  };




  const setupChain = async () => {
    const endpoint = network?.paras?.[paraID]?.[0]?.wsUri;
		setChainLoading(true)
      const  chain = await setup({
        endpoint,
        block: paraHeadInfo[0].head,
        mockSignatureHost: true,
        db: new IdbDatabase('cache'),
      })
      setChain(chain)

		const provider = new ChopsticksProvider(chain)
		const api = new ApiPromise({ provider, noInitWarn: true })
		await api.isReadyOrError
    setChopsticksApi(api)

    let specVersion = await api.rpc.state.getRuntimeVersion()

    let spec = {runtime: specVersion.toJSON().specVersion, block:chain.head.number}
    setRuntimeVersions([spec])

		setChainLoading(false)
		setBlocks([{ number: chain.head.number, hash: chain.head.hash }])
    return api
	}

  const disconnect = async () => {
    await chopsticksApi.disconnect()
  }

   const runtimeUpgrade = async () => {
    const runtime = fileContent   
    let bob_balance = await chopsticksApi.query.system.account(bob.address)
    setLines((old) => [...old,`Bob balance before runtime upgrade: ${bob_balance.data.free}`])
    setLines((old) => [...old,`Calling missing pallet DoSomething before runtime upgrade:`])
    try {
      await chopsticksApi.tx.newPallet.doSomething(10).signAndSend(alice)
    } catch(e){
      setLines((old) => [...old,`               ${e.message}}`])
    }

    setLines((old) => [...old,`-------------`,`Executing Runtime upgrade to Spec version 1010...`])
    let res = await chopsticksApi.tx.sudo.sudoUncheckedWeight(chopsticksApi.tx.system.setCode(runtime), (0,0)).signAndSend(alice)
    setLines((old) => [...old,`Runtime upgrade to Spec version 1010 executed ${res.toHex()}`])
    setLines((old) => [...old,`Executing 4 blocks...`])
    await chain.newBlock()
    await chain.newBlock()

    await chain.newBlock()
    setLines((old) => [...old,`Block ${chain.head.number} / Hash: ${chain.head.hash} executed`])
 

/*     const call =  chopsticksApi.tx.balances.transferKeepAlive(bob.address, 1e12)
    const tx = chopsticksApi.createType('Call', call);
    console.log('tx',tx.toHex())
    const humanTx = tx.toHuman();

const { outcome, storageDiff } = await chain.dryRunExtrinsic({
  call: tx.toHex(),
  address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  console.log('outcome',outcome.toHuman())
}) */


 


    let specVersion = await chopsticksApi.rpc.state.getRuntimeVersion()
    setLines((old) => [...old,`-------------`,`Spec Version (Runtime Version): ${specVersion.toJSON().specVersion}`])


    res =  await chopsticksApi.tx.balances.transferKeepAlive(bob.address, 1e12).signAndSend(alice)
    setLines((old) => [...old,`Alice transfers 1 Token to Bob / Hash: ${res.toHex()}`])
    await chain.newBlock()
    setLines((old) => [...old,`Block ${chain.head.number} / Hash: ${chain.head.hash} executed`])
     bob_balance = await chopsticksApi.query.system.account(bob.address)
    setLines((old) => [...old,`Bob balance after: ${bob_balance.data.free}`]) 
    setLines((old) => [...old,`-------------`,`Executing new pallet call DoSomething`])
    res = await chopsticksApi.tx.newPallet.doSomething(10).signAndSend(alice)

    setLines((old) => [...old,`New pallet call DoSomething(10) executed: ${res.toHex()}`])
    await chain.newBlock()
    setLines((old) => [...old,`Block ${chain.head.number} / Hash: ${chain.head.hash} executed`])
    let storage_value = await chopsticksApi.query.newPallet.something()
    setLines((old) => [...old,`Querying storage value of new pallet: ${storage_value.value}`])

  }

  const fork =  async () => {
    setLines([])
      const api =await setupChain()
      setLines((old) => [...old, `Forking ParaId: ${paraID} from last block ${paraHeadInfo[0].head}...`])
      let specVersion = await api.rpc.state.getRuntimeVersion()
      setLines((old) => [...old,`-------------`,`Spec Version (Runtime Version): ${specVersion.toJSON().specVersion}`])
  
     
  }

  return (
    <>
      <h1>
        Runtime Upgrade
      </h1>
    <button onClick={fork}>Fork</button>
    
    <button onClick={runtimeUpgrade}>Runtime Upgrade</button>
    <input type="file" onChange={handleFileChange} />
            {loading && <p>Loading file...</p>}
      {lines.length > 0 &&       <div className="console-output">
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>}

    </>

  )
}

export default RuntimeUpgrade
