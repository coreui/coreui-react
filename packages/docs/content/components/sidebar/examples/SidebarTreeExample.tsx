import React from 'react'
import { CSidebar, CSidebarNav, CNavGroup, CNavItem } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilFolder } from '@coreui/icons'

export const SidebarTreeExample = () => {
  return (
    <CSidebar className="border-end">
      <CSidebarNav variant="tree">
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilFolder} /> Parent item
            </>
          }
          visible
        >
          <CNavItem href="#">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{' '}
            Child item
          </CNavItem>
          <CNavGroup
            toggler={
              <>
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>{' '}
                Nested group
              </>
            }
            visible
          >
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{' '}
              Nested child
            </CNavItem>
            <CNavItem href="#">
              <span className="nav-icon">
                <span className="nav-icon-bullet"></span>
              </span>{' '}
              Nested child
            </CNavItem>
          </CNavGroup>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  )
}
