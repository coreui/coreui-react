import { CCol, CContainer, CRow } from '@coreui/react'

export const GridAllBreakpointsExample = () => (
  <CContainer>
    <CRow>
      <CCol>col</CCol>
      <CCol>col</CCol>
      <CCol>col</CCol>
      <CCol>col</CCol>
    </CRow>
    <CRow>
      <CCol xs={8}>col-8</CCol>
      <CCol xs={4}>col-4</CCol>
    </CRow>
  </CContainer>
)
