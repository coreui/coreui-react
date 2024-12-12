import React from 'react'
import { CCol, CFormInput, CRow } from '@coreui/react'

export const LayoutGuttersExample = () => {
  return (
    <CRow className="g-3">
      <CCol xs>
        <CFormInput placeholder="First name" aria-label="First name" />
      </CCol>
      <CCol xs>
        <CFormInput placeholder="Last name" aria-label="Last name" />
      </CCol>
    </CRow>
  )
}
