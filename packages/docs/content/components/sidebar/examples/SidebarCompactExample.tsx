import React from 'react'
import { CSidebar, CSidebarNav, CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'

export const SidebarCompactExample = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarNav compact>
        <CNavTitle>Compact nav</CNavTitle>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> Components
        </CNavItem>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nested group
            </>
          }
          visible
        >
          <CNavItem href="#">Compact item</CNavItem>
          <CNavItem href="#">Compact item</CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  )
}
