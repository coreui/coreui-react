import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns3Example = () => (
  <CContainer>
    <CRow xs={{ cols: 3 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
