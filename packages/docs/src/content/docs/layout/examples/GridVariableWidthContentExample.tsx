import { CCol, CContainer, CRow } from '@coreui/react'

export const GridVariableWidthContentExample = () => (
  <CContainer>
    <div className="row justify-content-md-center">
      <CCol xs lg={2}>
        1 of 3
      </CCol>
      <CCol md="auto">Variable width content</CCol>
      <CCol xs lg={2}>
        3 of 3
      </CCol>
    </div>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol md="auto">Variable width content</CCol>
      <CCol xs lg={2}>
        3 of 3
      </CCol>
    </CRow>
  </CContainer>
)
