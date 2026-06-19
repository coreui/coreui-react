import React from 'react'
import { CNav, CNavLink } from '@coreui/react'

export const NavWorkingWithFlexUtilitiesExample = () => {
  return (
    <CNav as="nav" variant="pills" className="flex-column flex-sm-row">
      <CNavLink href="#" active>Active</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#" disabled>Disabled</CNavLink>
    </CNav>
  )
}
