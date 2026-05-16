import React from 'react'
import { CSidebar, CSidebarNav, CNavGroup, CNavItem } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilChevronCircleDownAlt,
  cilChevronCircleUpAlt,
  cilMinus,
  cilPlus,
  cilPuzzle,
} from '@coreui/icons'

export const SidebarCustomIndicatorExample = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarNav>
        <CNavGroup
          toggler={({ visible }) => (
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Items group
              <span className="nav-group-toggle-indicator">
                <CIcon className="icon icon-sm" icon={visible ? cilMinus : cilPlus} />
              </span>
            </>
          )}
          visible
        >
          <CNavItem href="#">Items group item</CNavItem>
          <CNavItem href="#">Items group item</CNavItem>
        </CNavGroup>
        <CNavGroup
          toggler={({ visible }) => (
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Alternate indicator
              <span className="nav-group-toggle-indicator">
                <CIcon
                  className="icon icon-sm"
                  icon={visible ? cilChevronCircleUpAlt : cilChevronCircleDownAlt}
                />
              </span>
            </>
          )}
        >
          <CNavItem href="#">Items group item</CNavItem>
          <CNavItem href="#">Items group item</CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  )
}
