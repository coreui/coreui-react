import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavVerticalExample = () => {
  return (
    <CNav className="flex-column">
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
