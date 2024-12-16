import React from 'react'
import { CNav, CNavLink } from '@coreui/react'

export const Nav2Example = () => {
  return (
    <CNav as="nav">
      <CNavLink href="#" active>Active</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#">Link</CNavLink>
      <CNavLink href="#" disabled>Disabled</CNavLink>
    </CNav>
  )
}
