import React from 'react'
import { CContainer, CNavbar, CNavbarText } from '@coreui/react'

export const NavbarText = () => {
  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarText>Navbar text with an inline element</CNavbarText>
      </CContainer>
    </CNavbar>
  )
}
