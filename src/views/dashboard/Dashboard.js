import React, {useState, useEffect, useCallback, useRef} from 'react'

import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CTable,
  CSpinner,
  CToaster,
  CToast,
  CToastHeader,
  CToastClose,
  CToastBody
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPlus, cilCog, cilExitToApp, cilCopy } from '@coreui/icons'

import ExportWasm from './exportWasm'

//CONTEXT
import { useApiContextRC } from '../../contexts/ConnectRelayContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'

//HOOKS
import useApiSubscription from '../../hooks/unSubHook';

//UTILITIES
import {parseSchedule} from './parseSchedule'
import { cutHash } from './handleHash'

const Dashboard = () => {

  // STATE MANAGEMENT
  const [paraHeadInfo, setParaHeadInfo] = useState([])
  const [rcHeadInfo, setrcHeadInfo] = useState(null)
  const [paraID, setParaID] = useState(null)
  const [coretimeLeft, setCoretimeLeft] = useState(null)
  const [paraHead, setParaHead] = useState(null)
  const [paraCodeHash, setParaCodeHash] = useState(null)
  const [toast, setToast] = useState(0)

  const toaster = useRef()

  //API Info
  const apiContextRC = useApiContextRC()
  const apiContextPara = useApiContextPara()

  const paraApi = apiContextPara.api
  const paraIsReady = apiContextPara.isReady
  
  const rcApi = apiContextRC.api
  const rcIsReady = apiContextRC.isReady

  //Values on Parachain
  useEffect(() =>{
    const getParaID = async () => {
      const _paraID = (await paraApi.query.parachainInfo.parachainId()).toNumber()
      setParaID(_paraID)
    }

    if(paraApi) {
      getParaID();
    }

  },[paraApi]);

  //Values on Relaychain
  useEffect(() =>{

    const getSchedule = async () => {
      const schedule = await rcApi.query.scheduler.agenda.entries();
      const _coretimeLeft = parseSchedule(schedule, rcApi, paraID)
      setCoretimeLeft(_coretimeLeft)
    }

    const getParaHead = async () => {
      const _paraHead = await (await rcApi.query.paras.heads(paraID)).toHuman()
      setParaHead(_paraHead)
    }

    const getParaCodeHash = async () => {
      const _paraCodeHash = await (await rcApi.query.paras.currentCodeHash(paraID)).toHuman()
      setParaCodeHash(_paraCodeHash)
    }

    if(rcApi) {
      getSchedule();
      getParaHead();
      getParaCodeHash();
    }

  },[rcApi, paraID, rcHeadInfo]);

  //Get parachainHead information
  const getNewParaHeads = useCallback(() => {
    if(paraApi){
      return paraApi.rpc.chain.subscribeNewHeads((lastHeader) => {
        const head =  lastHeader.toHuman().number
        const headHash = lastHeader.hash.toHuman()
        //TODO: have state saved only until 10 blocks, no need to show more.

        setParaHeadInfo(oldHeadInfo => [{head, headHash}, ...oldHeadInfo])
        // if (blocksCount < 11){
        //   setParaHeadInfo(oldHeadInfo => [{head, headHash}, ...oldHeadInfo])
        //   const newBlockCount = blocksCount + 1
        //   console.log(newBlockCount)
        //   setBlocksCount(newBlockCount)
        // } else {
        //   setParaHeadInfo(oldHeadInfo => [{head, headHash}, ...oldHeadInfo.slice(0,9)])
        // }
      })
    }
  }, [paraApi]);

  useApiSubscription(getNewParaHeads, paraIsReady);

  //Get relaychainHead information
  const getNewRCHeads = useCallback(() => {
    if(rcApi){
      return rcApi.rpc.chain.subscribeNewHeads((lastHeader) => {
        const head =  lastHeader.toHuman().number
        setrcHeadInfo(head)
      })
    }
  }, [rcApi]);

  useApiSubscription(getNewRCHeads, rcIsReady);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(paraHead)
    const message = (
      <CToast autohide={true} visible={true} color="success" className="text-white align-items-center">
        <div className="d-flex">
          <CToastBody>Copied to Clipboard!</CToastBody>
          <CToastClose className="me-2 m-auto" white />
        </div>
      </CToast>
    )
    setToast(message)
  }

  const blockColumns = [
    {
      key: 'head',
      label: 'Number',
      _props: { scope: 'col' },
    },
    {
      key: 'headHash',
      label:'Block Hash',
      _props: { scope: 'col' },
    },
  ]
  const blockItems = paraHeadInfo.slice(0,10)

  const collatorsColumns = [
    {
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'address',
      label:'Address',
      _props: { scope: 'col' },
    },
    {
      key: 'ws',
      label:'WebSocket',
      _props: { scope: 'col' },
    },
  ]

  const collatorItems = [
    {
      name: 1,
      address: '0x00',
      ws: 'ws://',
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <>
      <CRow className='d-flex align-items-center mb-4'>
        <CCol className={'ps-5'} md={10}>
          <h3>Project X</h3>
        </CCol>
        <CCol md={2} className='d-flex justify-content-end pe-5'>
          <CIcon className="text-danger" size="xl" icon={cilExitToApp} />
        </CCol>
      </CRow>
      <CRow className='mb-3'>
        <CCol>
          {/*this is parachain meta info*/}
          <CRow className='mb-3 d-flex justify-content-between'>
            <CCol className='p-0 me-2'>
              <CCard>
                <CCardBody>
                  <CCardTitle>ParachainID</CCardTitle>
                  {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                  <CCardText>
                    {paraID ? paraID : ""}
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol className='p-0 ms-2'>
              <CCard>
                <CCardBody>
                  <CCardTitle className='d-flex align-items-center'>
                    <CCol md={10}>Coretime</CCol>
                    <CCol md={2} className='d-flex justify-content-end'>
                      <CIcon size='lg' icon={cilPlus} />
                    </CCol>
                  </CCardTitle>
                  {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                  <CCardText>
                    {coretimeLeft ? coretimeLeft : ""}
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CCard>
              <CCardBody>
                <CCardTitle className='d-flex align-items-center'>
                  <CCol md={10}> Parachain Head </CCol>
                  <CCol md={2} className='d-flex justify-content-end align-items-center align-items-center'>
                      <CIcon size='lg' onClick={() => handleCopyClick()} icon={cilCopy} />
                      <CToaster ref={toaster} push={toast} placement="top-end" />
                  </CCol>
                </CCardTitle>
                {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                <CCardText>
                  {paraHead ? cutHash(paraHead) : ""}
                </CCardText>
              </CCardBody>
            </CCard>
          </CRow>
          <CRow>
            <CCard>
              <CCardBody>
                <CCardTitle className='d-flex align-items-center'>
                  <CCol md={10}> Parachain Code Hash </CCol>
                  <CCol md={2} className='d-flex justify-content-end align-items-center align-items-center'>
                      <ExportWasm wasmHash={paraCodeHash} paraID={paraID} />
                      <CIcon size='lg' icon={cilCog} />
                  </CCol>
                </CCardTitle>
                {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                <CCardText>
                  {paraCodeHash ? paraCodeHash : ""}
                </CCardText>
              </CCardBody>
            </CCard>
          </CRow>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <CCardTitle>Recent Parachain Blocks</CCardTitle>
              <CTable className='overflow-auto' columns={blockColumns} items={blockItems} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className='me-0'>
        <CCard>
          <CCardBody >
            <CCardTitle>Collator Nodes</CCardTitle>
            <CTable className='mt-2 overflow-auto' columns={collatorsColumns} items={collatorItems} />
          </CCardBody>
        </CCard>
      </CRow>
    </>
  )
}

export default Dashboard
