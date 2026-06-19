import React from 'react'
import { CForm, CFormInput, CInputGroup, CInputGroupText, CNavbar } from '@coreui/react'

export const NavbarForms3Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CForm className="container-fluid">
        <CInputGroup>
          <CInputGroupText id="basic-addon1">@</CInputGroupText>
          <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </CInputGroup>
      </CForm>
    </CNavbar>
  )
}
