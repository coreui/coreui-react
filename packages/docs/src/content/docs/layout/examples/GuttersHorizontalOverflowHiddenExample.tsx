import { CCol, CContainer, CRow } from '@coreui/react'

export const GuttersHorizontalOverflowHiddenExample = () => (
  <CContainer className="overflow-hidden">
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
