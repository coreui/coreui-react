import { CCol, CContainer, CRow } from '@coreui/react'

export const GridMixAndMatchExample = () => (
  <CContainer>
    <CRow>
      <CCol md={8}>.col-md-8</CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
    </CRow>
    <CRow>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
      <CCol xs={6} md={4}>
        .col-6 .col-md-4
      </CCol>
    </CRow>
    <CRow>
      <CCol xs={6}>.col-6</CCol>
      <CCol xs={6}>.col-6</CCol>
    </CRow>
  </CContainer>
)
