import React from 'react'
import { CContainer, CCol, CRow, CButton } from '@coreui/react'
import {Link } from "react-router-dom";

const Empty = () => {

  return (
    <CContainer fluid>
        <CRow className="align-items-center"> 
          <CCol>
            <h1 style={{"textAlign":"center", "marginTop": "4rem", "marginBottom": "4rem", "fontWeight":"200"}}>No active deployment</h1>
          </CCol>
        </CRow>
        <CRow className="align-items-center">
          {/* <CButton component="a" href="/configure" className="col-3 mx-auto" color="success" size="lg" variant="outline" style={{"fontWeight":"200"}}>Start Building</CButton> */}
          <Link to="/configure" style={{"display":"contents"}}>
            <CButton className="col-3 mx-auto" color="success" size="lg" variant="outline" style={{"fontWeight":"200"}}>
              Start Building
            </CButton>
          </Link>
        </CRow>
    </CContainer>
  )
}

export default Empty
