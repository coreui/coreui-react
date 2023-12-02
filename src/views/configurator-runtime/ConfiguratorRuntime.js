import React from 'react'
import runtimes from 'src/assets/runtimes/runtime.json'
import {Link} from 'react-router-dom'
import { useLocalStorageContext } from 'src/contexts/LocalStorageContext'


import { CButton, CCard, CCardImage, CCardBody, CCardFooter, CCardTitle, CCardText, CAccordion, CAccordionHeader, CAccordionItem, CAccordionBody, CRow, CCol, CAvatar, CBadge} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cibGithub} from '@coreui/icons'

const ConfiguratorRuntime = () => {

  const { runtime, setRuntime } = useLocalStorageContext();


  const handleClick = (runtimeInfo) => {
    setRuntime(runtimeInfo)
  }
  console.log('runtime', runtime)
  // console.log(runtimes)

  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
      {runtimes.map(runtimeInfo => {
        return (
          <CCol key={runtimeInfo.id} xs>
            <CCard className={runtimeInfo.id === runtime.id ? 'border-success h-100' : 'h-100'}>
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
  )
}

export default ConfiguratorRuntime
