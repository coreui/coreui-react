import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavHorizontalAlignment2Example = () => {
  return (
    <CNav className="justify-content-end">
      <CNavItem>
        <CNavLink href="#" active>Active</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#">Link</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href="#" disabled>Disabled</CNavLink>
      </CNavItem>
    </CNav>
  )
}
