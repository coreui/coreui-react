import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'

export const NavFillAndJustifyExample = () => {
  return (
    <CNav variant="pills" layout="fill">
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
