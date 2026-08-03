import { CCol, CContainer, CRow } from '@coreui/react'

export const GridEqualWidthExample = () => (
  <CContainer>
    <CRow>
      <CCol>1 of 2</CCol>
      <CCol>2 of 2</CCol>
    </CRow>
    <CRow>
      <CCol>1 of 3</CCol>
      <CCol>2 of 3</CCol>
      <CCol>3 of 3</CCol>
    </CRow>
  </CContainer>
)
