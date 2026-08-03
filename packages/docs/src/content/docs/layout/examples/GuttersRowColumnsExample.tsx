import { CCol, CContainer, CRow } from '@coreui/react'

export const GuttersRowColumnsExample = () => (
  <CContainer>
    <CRow xs={{ cols: 2, gutter: 2 }} lg={{ cols: 5, gutter: 3 }}>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
      <CCol>
        <div className="p-3">Row column</div>
      </CCol>
    </CRow>
  </CContainer>
)
