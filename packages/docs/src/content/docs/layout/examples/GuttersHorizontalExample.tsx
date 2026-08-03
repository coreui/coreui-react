import { CCol, CContainer, CRow } from '@coreui/react'

export const GuttersHorizontalExample = () => (
  <CContainer className="px-4">
    <CRow xs={{ gutterX: 5 }}>
      <CCol>
        <div className="p-3">Custom column padding</div>
      </CCol>
      <CCol>
        <div className="p-3">Custom column padding</div>
      </CCol>
    </CRow>
  </CContainer>
)
