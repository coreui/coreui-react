import React from 'react'
import { CContainer, CCol, CRow, CButton } from '@coreui/react'

const Empty = () => {

  return (
    <CContainer fluid>
        <CRow className="align-items-center"> 
          <CCol>
            <h1 style={{"textAlign":"center", "marginTop": "4rem", "marginBottom": "4rem", "fontWeight":"300"}}>No active deployment</h1>
          </CCol>
        </CRow>
        <CRow className="align-items-center">
          <CButton className="col-3 mx-auto" color="success" size="lg" variant="outline">Start Building</CButton>
        </CRow>
    </CContainer>
  )
}

export default Empty
