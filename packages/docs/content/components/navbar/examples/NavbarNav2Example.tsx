import React, { useState } from 'react'
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavLink,
} from '@coreui/react'

export const NavbarNav2Example = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-tertiary">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav as="nav">
              <CNavLink href="#" active>
                Home
              </CNavLink>
              <CNavLink href="#">Features</CNavLink>
              <CNavLink href="#">Pricing</CNavLink>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}
