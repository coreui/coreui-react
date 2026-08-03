import { CCol, CContainer, CRow } from '@coreui/react'

export const GuttersHorizontalVerticalExample = () => (
  <CContainer>
    <CRow xs={{ gutter: 2 }}>
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
