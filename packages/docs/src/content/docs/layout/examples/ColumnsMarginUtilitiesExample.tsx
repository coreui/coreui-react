import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsMarginUtilitiesExample = () => (
  <CContainer>
    <CRow>
      <CCol md={4}>.col-md-4</CCol>
      <CCol md={4} className="ms-auto">
        .col-md-4 .ms-auto
      </CCol>
    </CRow>
    <CRow>
      <CCol md={3} className="ms-md-auto">
        .col-md-3 .ms-md-auto
      </CCol>
      <CCol md={3} className="ms-md-auto">
        .col-md-3 .ms-md-auto
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="auto" className="me-auto">
        .col-auto .me-auto
      </CCol>
      <CCol xs="auto">.col-auto</CCol>
    </CRow>
  </CContainer>
)
