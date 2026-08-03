import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsOrderExample = () => (
  <CContainer>
    <CRow>
      <CCol>First in DOM, no order applied</CCol>
      <CCol xs={{ span: true, order: 5 }}>Second in DOM, with a larger order</CCol>
      <CCol xs={{ span: true, order: 1 }}>Third in DOM, with an order of 1</CCol>
    </CRow>
  </CContainer>
)
