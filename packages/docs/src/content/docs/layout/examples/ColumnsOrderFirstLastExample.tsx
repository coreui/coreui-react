import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsOrderFirstLastExample = () => (
  <CContainer>
    <CRow>
      <CCol xs={{ span: true, order: 'last' }}>First in DOM, ordered last</CCol>
      <CCol>Second in DOM, unordered</CCol>
      <CCol xs={{ span: true, order: 'first' }}>Third in DOM, ordered first</CCol>
    </CRow>
  </CContainer>
)
