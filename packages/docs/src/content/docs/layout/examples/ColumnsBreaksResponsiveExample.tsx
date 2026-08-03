import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsBreaksResponsiveExample = () => (
  <CContainer>
    <CRow>
      <CCol xs={6} sm={4}>
        .col-6 .col-sm-4
      </CCol>
      <CCol xs={6} sm={4}>
        .col-6 .col-sm-4
      </CCol>
      <div className="w-100 d-none d-md-block"></div>
      <CCol xs={6} sm={4}>
        .col-6 .col-sm-4
      </CCol>
      <CCol xs={6} sm={4}>
        .col-6 .col-sm-4
      </CCol>
    </CRow>
  </CContainer>
)
