import React from 'react'
import { CContainer, CCol, CRow, CCard, CCardBody, CCardText, CCardTitle, CAvatar, CButton } from '@coreui/react'
import {Link} from 'react-router-dom'
import {cilArrowCircleRight} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'


const Configurator = () => {

  const { collators, runtime, coretime } = useConfiguratorFormContext();

  const handleClick = () => {
    console.log('clicked')
  }
  
  return (
    <CContainer fluid >
      <CCard className="mb-3 col-md-10">
        <CRow className="g-0 p-3">
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <CAvatar color="light" size="xl">1</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Select Runtime</CCardTitle>
              <CCardText>
                {runtime.name ? runtime.name : "Please Select a Runtime"}
              </CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <Link to='/configure/runtime'>
              <CIcon size="xxl" className="text-secondary" icon={cilArrowCircleRight} />
            </Link>
          </CCol>
        </CRow>
      </CCard>
      <CCard className="mb-3 col-md-10">
        <CRow className="g-0 p-3">
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <CAvatar color="light" size="xl">2</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Network Topology</CCardTitle>
              <CCardText>
                {collators ? collators : "Please configure Network Topology"}
              </CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <Link to='/configure/runtime'>
              <CIcon size="xxl" className="text-secondary" icon={cilArrowCircleRight} />
            </Link>
          </CCol>
        </CRow>
      </CCard>
      <CCard className="mb-3 col-md-10">
        <CRow className="g-0 p-3">
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <CAvatar color="light" size="xl">3</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Coretime</CCardTitle>
              <CCardText>
                {coretime.amount ? coretime.amount : "Please configure Coretime needs"}
              </CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <Link to='/configure/runtime'>
              <CIcon size="xxl" className="text-secondary" icon={cilArrowCircleRight} />
            </Link>
          </CCol>
        </CRow>
      </CCard>
      <CRow className="g-0 p-3 col-md-10">
        <CButton onClick={() => handleClick()}className="col-3 mx-auto" color="success" size="lg" variant="outline" style={{"fontWeight":"200"}}>
          Deploy
        </CButton>
      </CRow>
    </CContainer>
  )
}

export default Configurator
