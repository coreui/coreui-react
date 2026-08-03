import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns2Example = () => (
  <CContainer>
    <CRow xs={{ cols: 2 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
