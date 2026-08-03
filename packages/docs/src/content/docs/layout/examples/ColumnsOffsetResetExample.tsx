import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsOffsetResetExample = () => (
  <CContainer>
    <CRow>
      <CCol sm={5} md={6}>
        .col-sm-5 .col-md-6
      </CCol>
      <CCol sm={{ span: 5, offset: 2 }} md={{ span: 6, offset: 0 }}>
        .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0
      </CCol>
    </CRow>
    <CRow>
      <CCol sm={6} md={5} lg={6}>
        .col-sm-6 .col-md-5 .col-lg-6
      </CCol>
      <CCol sm={6} md={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 0 }}>
        .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
      </CCol>
    </CRow>
  </CContainer>
)
