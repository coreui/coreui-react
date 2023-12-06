import React, {useState, useRef} from 'react'

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
  CToastClose,
  CToastBody
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPlus, cilCog, cilExitToApp, cilCopy } from '@coreui/icons'
import ExportWasm from './exportWasm'
import { blockColumns } from './blockTableConfig'
import { collatorsColumns } from './collatorTableConfig'


//CONTEXT
import { useApiContextRC } from '../../contexts/ConnectRelayContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'

//UTILITIES
import { cutHash } from '../../utilities/handleHash'

const Dashboard = () => {
  
  const {paraID, paraHeadInfo} = useApiContextPara();
  const {coretimeLeft, paraHead, paraCodeHash} = useApiContextRC();

  // STATE MANAGEMENT
  const [toast, setToast] = useState(0)
  const toaster = useRef()

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
  const blockItems = paraHeadInfo ? paraHeadInfo.slice(0,10) : []

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
