import React from 'react'
import { CButton, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarForms2Example = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </CContainer>
    </CNavbar>
  )
}
