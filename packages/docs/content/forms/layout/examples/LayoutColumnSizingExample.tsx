import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutColumnSizingExample = () => {
  return (
    <CRow className="g-3">
      <CCol sm={7}>
        <CFormInput placeholder="City" aria-label="City" />
      </CCol>
      <CCol sm>
        <CFormInput placeholder="State" aria-label="State" />
      </CCol>
      <CCol sm>
        <CFormInput placeholder="Zip" aria-label="Zip" />
      </CCol>
    </CRow>
  )
}
