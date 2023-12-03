import React from 'react'
import runtimes from './runtime.json'
import {Link} from 'react-router-dom'
import { useConfiguratorFormContext } from 'src/contexts/ConfiguratorFormContext'


import { CButton, CCard, CCardImage, CCardBody, CCardFooter, CCardTitle, CCardText, CRow, CCol} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibGithub, cilArrowLeft} from '@coreui/icons'

const ConfiguratorRuntime = () => {

  const { runtime, setRuntime } = useConfiguratorFormContext();


  const handleClick = (runtimeInfo) => {
    setRuntime((runtime) => ({template: runtimeInfo, specs: runtime.specs}))
  }

  return (
    <>
    <CRow>
      {/* <CCol md={1}>
        <Link to='/configure'>
          <CIcon size="lg" className="text-secondary" icon={cilArrowLeft}/>
        </Link>
      </CCol> */}
      {/* <CCol md={11}> */}
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          {runtimes.map(runtimeInfo => {
            return (
              <CCol key={runtimeInfo.id} xs>
                <CCard className={(runtime.template && runtimeInfo.id === runtime.template.id) ? 'border-start border-start-4 border-start-success h-100' : 'h-100'}>
                  <CCardImage orientation="top" src={runtimeInfo.img} />
                  <CCardBody>
                    <CCardTitle>{runtimeInfo.name}</CCardTitle>
                    <CCardText>
                      {runtimeInfo.shortDescription}
                    </CCardText >
                    <CButton variant="outline" className='fw-light' onClick={() => handleClick(runtimeInfo)}>Use</CButton>
                  </CCardBody>
                  <CCardFooter>
                    <Link target="_blank" to={`${runtimeInfo.github}`}>
                      <CIcon size="lg" className="text-secondary" icon={cibGithub}/>
                    </Link>
                  </CCardFooter>
                </CCard>
              </CCol>
            )
          })}
        </CRow>
      {/* </CCol> */}
    </CRow>
    <CRow className='mt-4'>
      <Link className='text-center' to="/configure/runtime-specs">
          <CButton className='fw-light'>Next</CButton>
        </Link>
      </CRow>
    </>
  )
}

export default ConfiguratorRuntime
