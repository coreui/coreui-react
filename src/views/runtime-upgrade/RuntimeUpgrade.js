import React, {useState, useEffect} from 'react'
import { createTestPairs } from '@polkadot/keyring'
import { ChopsticksProvider, setStorage, setup } from '@acala-network/chopsticks-core'
import { IdbDatabase } from '@acala-network/chopsticks-db/browser'
import { ApiPromise } from '@polkadot/api'
import { useLocalStorageContext } from '../../contexts/LocalStorageContext'

const RuntimeUpgrade = () => {
  const {network} = useLocalStorageContext();
	const [dryRunLoading, setDryRunLoading] = useState(false)
	const [chainLoading, setChainLoading] = useState(false)
	const [config, setConfig] = useState({
		endpoint: 'ws://127.0.0.1:50877',
		block: 10,
	})
	const [blocks, setBlocks] = useState([])
	const [bobBalance, setBobBalance] = useState('')
	const [transferDisabled, setTransferDisabled] = useState(false)
  const [chopsticksApi, setChopsticksApi] = useState(null)
  const [chain, setChain] = useState(null)
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { alice, bob } = createTestPairs()
  const [runtimeVersions, setRuntimeVersions] = useState([])



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

  useEffect(() => {
    setupChain()
  },[])


  const setupChain = async () => {
		setChainLoading(true)
      const  chain = await setup({
        endpoint: config.endpoint,
        block: config.block,
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
    console.log('specVersion', specVersion.toJSON().specVersion)

		setChainLoading(false)
		setBlocks([{ number: chain.head.number, hash: chain.head.hash }])
    return api
	}

  const disconnect = async () => {
    await chopsticksApi.disconnect()
  }

   const runtimeUpgrade = async () => {
    const runtime = fileContent

   // expect(await chain.head.runtimeVersion).toEqual(expect.objectContaining({ specVersion: 1000 }))
    await chopsticksApi.tx.sudo.sudoUncheckedWeight(chopsticksApi.tx.system.setCode(runtime), (0,0)).signAndSend(alice)
    await chain.newBlock({ count: 3 })

    await chopsticksApi.tx.balances.transferKeepAlive(bob.address, 1e12).signAndSend(alice)
    await chain.newBlock()

    await disconnect()
    await setupChain(chain)

    let bob_balance = await chopsticksApi.query.system.account(bob.address)

    let specVersion = await chopsticksApi.rpc.state.getRuntimeVersion()
    let spec = {runtime:specVersion.toJSON().specVersion, block:chain.head.number}
    setRuntimeVersions((old) => [...old,spec])
    await chopsticksApi.tx.newPallet.doSomething(10).signAndSend(alice)
  }


  return (
    <>
      <h1>
        Runtime Upgrade
      </h1>
    <button onClick={runtimeUpgrade}>Runtime Upgrade</button>
    <input type="file" onChange={handleFileChange} />
            {loading && <p>Loading file...</p>}
      {runtimeVersions.map(({runtime,block}) => <p>number: {runtime}, block: {block}</p>)}
    </>

  )
}

export default RuntimeUpgrade
