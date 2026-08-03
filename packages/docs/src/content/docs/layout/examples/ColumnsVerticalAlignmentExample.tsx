import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsVerticalAlignmentExample = () => (
  <CContainer>
    <CRow className="align-items-start">
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
    </CRow>
    <CRow className="align-items-center">
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
    </CRow>
    <CRow className="align-items-end">
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
      <CCol>One of three columns</CCol>
    </CRow>
  </CContainer>
)
