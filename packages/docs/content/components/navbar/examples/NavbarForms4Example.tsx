import React from 'react'
import { CButton, CForm, CNavbar } from '@coreui/react'

export const NavbarForms4Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CForm className="container-fluid justify-content-start">
        <CButton type="button" color="success" variant="outline" className="me-2">
          Main button
        </CButton>
        <CButton type="button" color="secondary" variant="outline" size="sm">
          Smaller button
        </CButton>
      </CForm>
    </CNavbar>
  )
}
