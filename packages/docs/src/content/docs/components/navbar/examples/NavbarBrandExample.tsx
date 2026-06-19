import React from 'react'
import { CContainer, CNavbar, CNavbarBrand } from '@coreui/react'

export const NavbarBrandExample = () => {
  return (
    <>
      {/* As a link */}
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>

      {/* As a heading */}
      <CNavbar className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand className="mb-0 h1">Navbar</CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  )
}
