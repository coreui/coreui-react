import { CCol, CContainer, CRow } from '@coreui/react'

export const GridRowColumnsResponsiveExample = () => (
  <CContainer>
    <CRow xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 4 }}>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
      <CCol>Column</CCol>
    </CRow>
  </CContainer>
)
