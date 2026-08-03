import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumnsAutoExample = () => (
  <CContainer>
    <CRow xs={{ cols: 'auto' }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
