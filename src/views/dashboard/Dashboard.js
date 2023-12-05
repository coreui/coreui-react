import React from 'react'

import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPlus, cilCloudDownload, cilCog } from '@coreui/icons'

//CONTEXT
import { useApiContextRC } from '../../contexts/ConnectRelayContext'
import { useApiContextPara } from '../../contexts/ConnectParaContext'


const Dashboard = () => {

  const blockColumns = [
    {
      key: 'numb',
      label: 'Number',
      _props: { scope: 'col' },
    },
    {
      key: 'hash',
      label:'Block Hash',
      _props: { scope: 'col' },
    },
  ]

  const blockItems = [
    {
      numb: 1,
      hash: '0x00',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      numb: 2,
      hash: '0x01',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      numb: 3,
      hash: '0x02',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]

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

  const apiContextRC = useApiContextRC()
  const apiContextPara = useApiContextPara()

  return (
    <>
      <CRow>
        <CCol>
          {/*this is project name*/}
        </CCol>
        <CCol>
          {/*this is option to kill or whatever*/}
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          {/*this is parachain meta info*/}
          <CRow>
            <CCol>
              <CCard>
                <CCardBody>
                  <CCardTitle>ParachainID</CCardTitle>
                  {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                  <CCardText>
                    2000
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
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
                    1000 blocks
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCard>
              <CCardBody>
                <CCardTitle>Parachain Head</CCardTitle>
                {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                <CCardText>
                  0x0000
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
                      <CIcon className='me-2' size='lg' icon={cilCloudDownload} />
                      <CIcon size='lg' icon={cilCog} />
                  </CCol>
                </CCardTitle>
                {/* <CCardSubtitle className="mb-2 text-medium-emphasis">ID of Parachain on the Relaychain.</CCardSubtitle> */}
                <CCardText>
                  0x0000
                </CCardText>
              </CCardBody>
            </CCard>
          </CRow>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <CCardTitle>Recent Parachain Blocks</CCardTitle>
              <CTable columns={blockColumns} items={blockItems} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCard>
          <CCardBody>
            <CCardTitle>Collator Nodes</CCardTitle>
            <CTable className='mt-2' columns={collatorsColumns} items={collatorItems} />
          </CCardBody>
        </CCard>
      </CRow>
    </>
  )
}

export default Dashboard
