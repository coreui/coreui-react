import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavEnclosedPillsExample = () => {
  return (
    <CNav variant="enclosed-pills">
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
