import React from 'react'
import runtimes from 'src/assets/runtimes/runtime.json'
import {Link} from 'react-router-dom'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'


import { CButton, CCard, CCardImage, CCardBody, CCardFooter, CCardTitle, CCardText, CRow, CCol} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibGithub, cilArrowLeft} from '@coreui/icons'

const ConfiguratorRuntime = () => {

  const { runtime, setRuntime } = useLocalStorageContext();


  const handleClick = (runtimeInfo) => {
    setRuntime(runtimeInfo)
  }

  return (
    <>
      <CCol md={1}>
        <Link to='/configure'>
          <CIcon size="lg" className="text-secondary" icon={cilArrowLeft}/>
        </Link>
      </CCol>
      <CCol md={11}>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
          {runtimes.map(runtimeInfo => {
            return (
              <CCol key={runtimeInfo.id} xs>
                <CCard className={runtimeInfo.id === runtime.id ? 'border-start border-start-4 border-start-success h-100' : 'h-100'}>
                  <CCardImage orientation="top" src={runtimeInfo.img} />
                  <CCardBody>
                    <CCardTitle>{runtimeInfo.name}</CCardTitle>
                    <CCardText>
                      {runtimeInfo.shortDescription}
                    </CCardText>
                    <CButton onClick={() => handleClick(runtimeInfo)}>Select</CButton>
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
      </CCol>
    </>
  )
}

export default ConfiguratorRuntime
