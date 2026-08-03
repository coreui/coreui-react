import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsHorizontalAlignmentExample = () => (
  <CContainer>
    <CRow className="justify-content-start">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
    <CRow className="justify-content-center">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
    <CRow className="justify-content-end">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
    <CRow className="justify-content-around">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
    <CRow className="justify-content-between">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
    <CRow className="justify-content-evenly">
      <CCol xs={4}>One of two columns</CCol>
      <CCol xs={4}>One of two columns</CCol>
    </CRow>
  </CContainer>
)
