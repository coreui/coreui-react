import { CCol, CContainer, CRow } from '@coreui/react'

export const GuttersVerticalExample = () => (
  <CContainer className="overflow-hidden">
    <CRow xs={{ gutterY: 5 }}>
      <CCol xs={{ span: 6 }}>
        <div className="p-3">Custom column padding</div>
      </CCol>
      <CCol xs={{ span: 6 }}>
        <div className="p-3">Custom column padding</div>
      </CCol>
      <CCol xs={{ span: 6 }}>
        <div className="p-3">Custom column padding</div>
      </CCol>
      <CCol xs={{ span: 6 }}>
        <div className="p-3">Custom column padding</div>
      </CCol>
    </CRow>
  </CContainer>
)
