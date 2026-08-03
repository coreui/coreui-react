import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsBreaksExample = () => (
  <CContainer>
    <CRow>
      <CCol xs={6} sm={3}>
        .col-6 .col-sm-3
      </CCol>
      <CCol xs={6} sm={3}>
        .col-6 .col-sm-3
      </CCol>
      <div className="w-100"></div>
      <CCol xs={6} sm={3}>
        .col-6 .col-sm-3
      </CCol>
      <CCol xs={6} sm={3}>
        .col-6 .col-sm-3
      </CCol>
    </CRow>
  </CContainer>
)
