import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'

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
  CToastBody,
  CContainer,
  CPopover,
  CButton
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPlus, cilCog, cilExitToApp, cilCopy } from '@coreui/icons'
import ExportWasm from './exportWasm'
import { blockColumns } from './blockTableConfig'
import { collatorsColumns } from './collatorTableConfig'


//CONTEXT
import { useApiContextRC } from '../../contexts/ConnectRelayContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'

//UTILITIES
import { cutHash } from '../../utilities/handleHash'

const Dashboard = () => {
  
  const {paraID, paraHeadInfo} = useApiContextPara();
  const {coretimeLeft, paraHead, paraCodeHash} = useApiContextRC();
  const paraNodes = useLocalStorageContext().network?.paras?.[paraID]?.map(node =>{
    return {...node, address:""}
  }).sort((node1, node2) => node1.name > node2.name)

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

  return (
    <CContainer>
      <CRow className='d-flex align-items-center mb-4'>
        <CCol xl={{span : 10}}>
          <h3>Project X</h3>
        </CCol>
        <CCol xl={{span: 2}} className='d-flex justify-content-end pe-5'>
          <CIcon className="text-danger" size="xl" icon={cilExitToApp} />
        </CCol>
      </CRow>
      <CRow className='d-flex' xl={{ gutterX: 5 }}>
        <CCol className='mb-2' xl={{ span: 5}}>
          <CRow className='d-flex justify-content-between mb-2'>
              <CCard style={{width:"49%"}}>
                <CCardBody>
                  <CCardTitle>ParachainID</CCardTitle>
                  <CCardText>
                    {paraID ? paraID : ""}
                  </CCardText>
                </CCardBody>
              </CCard>
              <CCard style={{width:"49%"}}>
                <CCardBody>
                  <CCardTitle className='d-flex align-items-center'>
                    <CCol md={10}>
                      <CPopover className={'fw-lighter'} content="Remaining Coretime credits" placement="top" trigger={['hover', 'focus']}>
                        <span className="d-inline-block" tabIndex={0}>
                          Coretime
                        </span>
                      </CPopover>
                    </CCol>
                    <CCol md={2} className='d-flex justify-content-end'>
                      <Link to='/coretime'>
                        <CIcon size='lg' className="text-dark" icon={cilPlus} />
                      </Link>
                    </CCol>
                  </CCardTitle>
                  <CCardText>
                    {coretimeLeft ? coretimeLeft : ""}
                  </CCardText>
                </CCardBody>
              </CCard>
          </CRow>
          <CRow className='mb-2'>
            <CCard>
              <CCardBody>
                <CCardTitle className='d-flex align-items-center'>
                  <CCol md={10}>
                    <CPopover className={'fw-lighter'} content="Latest head of the parachain stored on the relaychain." placement="top" trigger={['hover', 'focus']}>
                      <span className="d-inline-block " tabIndex={0}>
                        Parachain Head
                      </span>
                    </CPopover>
                  </CCol>
                  <CCol md={2} className='d-flex justify-content-end align-items-center align-items-center'>
                      <CButton color="link" className='text-nowrap pe-0' onClick={() => handleCopyClick()}>
                        <CIcon size='lg' className="text-dark" icon={cilCopy} />
                      </CButton>
                      <CToaster ref={toaster} push={toast} placement="top-end" />
                  </CCol>
                </CCardTitle>
                <CCardText>
                  {paraHead ? cutHash(paraHead) : ""}
                </CCardText>
              </CCardBody>
            </CCard>
          </CRow>
          <CRow className='mb-2'>
            <CCard>
              <CCardBody>
                <CCardTitle className='d-flex align-items-center'>
                  <CCol md={10}>
                  <CPopover className={'fw-lighter'} content="Hash of the parachain code stored on the relaychain." placement="top" trigger={['hover', 'focus']}>
                    <span className="d-inline-block" tabIndex={0}>
                      Parachain Code Hash 
                    </span>
                  </CPopover>
                  </CCol>
                  <CCol md={2} className='d-flex justify-content-end align-items-center align-items-center'>
                      <ExportWasm wasmHash={paraCodeHash} paraID={paraID} />
                      <Link to='/runtime-upgrade'>
                        <CIcon size='lg' className="text-dark" icon={cilCog} />
                      </Link>
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
        <CCol className='mb-2' xl={{ span: 7 }}>
          <CRow>
            <CCard>
              <CCardBody className={'overflow-scroll'}>
                <CCardTitle>Recent Parachain Blocks</CCardTitle>
                <CTable columns={blockColumns} items={blockItems} />
              </CCardBody>
            </CCard>
          </CRow>
        </CCol>
      </CRow>
      <CRow className='mb-4'>
        <CCard>
          <CCardBody className={'overflow-scroll'}>
            <CCardTitle>Collator Nodes</CCardTitle>
            <CTable columns={collatorsColumns} items={paraNodes ? paraNodes : []} />
          </CCardBody>
        </CCard>
      </CRow>
    </CContainer>
  )
}

export default Dashboard
