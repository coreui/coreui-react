import { CCol, CContainer, CRow } from '@coreui/react'

export const GridSettingOneColumnWidthExample = () => (
  <CContainer>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol xs={6}>2 of 3 (wider)</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol xs={6}>2 of 3 (wider)</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
  </CContainer>
)
