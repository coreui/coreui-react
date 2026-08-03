import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsOffsetExample = () => (
  <CContainer>
    <CRow>
      <CCol md={4}>.col-md-4</CCol>
      <CCol md={{ span: 4, offset: 4 }}>.col-md-4 .offset-md-4</CCol>
    </CRow>
    <CRow>
      <CCol md={{ span: 3, offset: 3 }}>.col-md-3 .offset-md-3</CCol>
      <CCol md={{ span: 3, offset: 3 }}>.col-md-3 .offset-md-3</CCol>
    </CRow>
    <CRow>
      <CCol md={{ span: 6, offset: 3 }}>.col-md-6 .offset-md-3</CCol>
    </CRow>
  </CContainer>
)
