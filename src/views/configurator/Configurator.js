import {React, useState, useCallback} from 'react'
import { CContainer, CCol, CRow, CCard, CCardBody, CCardText, CCardTitle, CAvatar, CButton } from '@coreui/react'
import {Link} from 'react-router-dom'
import {cilArrowCircleRight} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import submit from './submit'

import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'


const Configurator = () => {
  const [formStatus, setStateStatus] = useState({executing: '', status: '', message: ''});
  const configurationContext = useConfiguratorFormContext();
  const [ready, setReady] = useState(false);

  const {collators, runtime, coretime } = configurationContext;

  const handleSubmit = useCallback(() => {
    submit({...configurationContext, setStateStatus,configurationContext})
  }, [configurationContext,setStateStatus]);
  
  return (
    <CContainer fluid >
      <CCard className="mb-3 col-md-10">
        <CRow className="g-0 p-3">
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <CAvatar className={runtime.template ? 'text-white fw-light': 'fw-light'} color={runtime.template ? 'success' : 'light'} size="xl">1</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Select Runtime</CCardTitle>
              <CCardText>
                {runtime.template ? runtime.template.name : "Please Select a Runtime"}
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
            <CAvatar className={collators ? 'text-white fw-light': 'fw-light'} color={collators ? 'success' : 'light'} size="xl">2</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Network Topology</CCardTitle>
              <CCardText>
                {collators ? (collators > 1 ? `${collators} Collators` : "1 Collator") : "Please configure Network Topology"}
              </CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <Link to='/configure/collators'>
              <CIcon size="xxl" className="text-secondary" icon={cilArrowCircleRight} />
            </Link>
          </CCol>
        </CRow>
      </CCard>
      <CCard className="mb-3 col-md-10">
        <CRow className="g-0 p-3">
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <CAvatar className={coretime.amount ? 'text-white fw-light': 'fw-light'} color={coretime.amount ? 'success' : 'light'} size="xl">3</CAvatar>
          </CCol>
          <CCol md={10}>
            <CCardBody>
              <CCardTitle>Coretime</CCardTitle>
              <CCardText>
                {coretime.amount 
                ? 
                  `Amount: ${coretime.amount}. Frequency: ${coretime.every}.`
                : 
                  "Please configure Coretime needs"}
              </CCardText>
            </CCardBody>
          </CCol>
          <CCol md={1} className="d-flex justify-content-center align-items-center">
            <Link to='/configure/coretime'>
              <CIcon size="xxl" className="text-secondary" icon={cilArrowCircleRight} />
            </Link>
          </CCol>
        </CRow>
      </CCard>
      <CRow className="g-0 p-3 col-md-10">
        {
          ready ? 
            <CButton onClick={() => handleClick()} className="col-3 mx-auto" color="success" size="lg" variant="outline" style={{"fontWeight":"200"}}>
              Deploy
            </CButton>
          :
            <CButton onClick={() => handleClick()} disabled className="col-3 mx-auto" color="danger" size="lg" variant="outline" style={{"fontWeight":"200"}}>
              Deploy
            </CButton>
        }

      </CRow>
    </CContainer>
  )
}

export default Configurator
