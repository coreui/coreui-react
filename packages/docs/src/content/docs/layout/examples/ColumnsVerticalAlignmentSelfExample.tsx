import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsVerticalAlignmentSelfExample = () => (
  <CContainer>
    <CRow>
      <CCol className="align-self-start">One of three columns</CCol>
      <CCol className="align-self-center">One of three columns</CCol>
      <CCol className="align-self-end">One of three columns</CCol>
    </CRow>
  </CContainer>
)
