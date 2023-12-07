import React, {useState, useEffect} from 'react'
import { CButton    } from '@coreui/react'
import './ConsoleOutput.css';
import { createTestPairs } from '@polkadot/keyring'
import { ChopsticksProvider, setStorage, setup } from '@acala-network/chopsticks-core'
import { IdbDatabase } from '@acala-network/chopsticks-db/browser'
import { ApiPromise } from '@polkadot/api'
import { useLocalStorageContext } from '../../contexts/LocalStorageContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'
import runtime_path from './devnet.wasm'
import { cilCloudDownload} from '@coreui/icons'
import CIcon from '@coreui/icons-react'


const RuntimeUpgrade = () => {
  const {network} = useLocalStorageContext();
  const {paraID, paraHeadInfo, tokenSymbol} = useApiContextPara();
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
  const [enableRuntimeUpgrade, setEnableRuntimeUpgrade] = useState(true)
  const [lines, setLines] = useState([]);
  const [runtime, setRuntime] = useState(null);

  useEffect(() => {
    fetch(runtime_path)
        .then(response => response.text())
        .then(text => setRuntime(text))
        .catch(error => console.error('Error loading WASM text:', error));
}, []);
  

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



   const runtimeUpgrade = async () => {
    setEnableRuntimeUpgrade(true);
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
 

    let specVersion = await chopsticksApi.rpc.state.getRuntimeVersion()
    setLines((old) => [...old,`-------------`,`Spec Version (Runtime Version): ${specVersion.toJSON().specVersion}`])

    res =  await chopsticksApi.tx.balances.transferKeepAlive(bob.address, 1e12).signAndSend(alice)



    setLines((old) => [...old,`Alice transfers 1 ${tokenSymbol} to Bob / Hash: ${res.toHex()}`])
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
    setLines((old) => [...old,`---------`,`Dry Runtime upgrade to Spec version 1011 SUCCESSFUL`])

  }

  const fork =  async () => {
    setLines([])
      const api =await setupChain()
      setLines((old) => [...old, `Forking ParaId: ${paraID} from last block ${paraHeadInfo[0].head}...`])
      let specVersion = await api.rpc.state.getRuntimeVersion()
      setLines((old) => [...old,`-------------`,`Spec Version (Runtime Version): ${specVersion.toJSON().specVersion}`])     
      setEnableRuntimeUpgrade(false);
  }

  const exportWasm = () => {
    // Create a Blob from the WASM content
    const blob = new Blob([runtime], { type: 'text/plain;charset=utf-8' });
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devnet-1010.wasm'; // Set the file name for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up the URL
    URL.revokeObjectURL(url);
};


  return (
    <>
      <h1>
        Runtime Upgrade Dry-Run
      </h1>
      <br />

              <p>This tool contains already a newer version of a runtime for the <strong>Extended Parachain Template</strong> (This new runtime can be downloaded).</p>
              <p>This new runtime upgrades the spec version <strong>1000</strong> to <strong>1010</strong> and it adds a new pallet called <strong>NewPallet.</strong></p>
              <p className='mt-2'><strong>Fork Button:</strong> Forks the chain from the last best block registered and show the spec version for that block.</p>
              <p className='mt-2'><strong>Dry-Run Runtime Upgrade:</strong> Performs the runtime upgrade and a few validations.</p>
      

        <CButton className='fw-light'  onClick={() => fork()} color="success" >Fork</CButton>
        <CButton className='fw-light'  disabled={enableRuntimeUpgrade} onClick={() => runtimeUpgrade()} color="success" style={{marginLeft: '10px'} } >Dry-Run Runtime Upgrade</CButton>
        <CButton color="link" className='text-nowrap pe-1 d-inline-flex'  >
            <CIcon onClick={() => exportWasm()} className='me-2 text-dark'  size='lg' icon={cilCloudDownload}/>
        </CButton>
      {lines.length > 0 &&       <div className="console-output">
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>}

    </>

  )
}

export default RuntimeUpgrade
