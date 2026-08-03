import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumns4ColExample = () => (
  <CContainer>
    <CRow xs={{ cols: 4 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol xs={6}>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
