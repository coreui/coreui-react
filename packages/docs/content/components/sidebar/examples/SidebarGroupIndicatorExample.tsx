import React from 'react'
import { CSidebar, CSidebarNav, CNavGroup, CNavItem } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilPuzzle } from '@coreui/icons'

export const SidebarGroupIndicatorExample = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarNav>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Items group
            </>
          }
          visible
        >
          <CNavItem href="#">Items group item</CNavItem>
          <CNavItem href="#">Items group item</CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  )
}
