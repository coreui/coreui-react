import React, { useState } from 'react'
import { CButton, CNavGroup, CNavItem, CSidebar, CSidebarFooter, CSidebarNav } from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSettings, cilSpeedometer } from '@coreui/icons'

export const SidebarControlledGroupExample = () => {
  const [visible, setVisible] = useState(true)
  const [locked, setLocked] = useState(true)

  const handleVisibleChange = (value: boolean) => {
    if (!value && locked) {
      return
    }

    setVisible(value)
  }

  return (
    <CSidebar className="border-end">
      <CSidebarNav>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
        </CNavItem>
        <CNavGroup
          onVisibleChange={handleVisibleChange}
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Active section
            </>
          }
          visible={visible}
        >
          <CNavItem href="#">Overview</CNavItem>
          <CNavItem href="#">Settings</CNavItem>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilLayers} /> Components
            </>
          }
        >
          <CNavItem href="#">Base</CNavItem>
          <CNavItem href="#">Buttons</CNavItem>
          <CNavGroup
            toggler={
              <>
                <span className="nav-icon">
                  <span className="nav-icon-bullet"></span>
                </span>{' '}
                Forms
              </>
            }
          >
            <CNavItem href="#">Inputs</CNavItem>
            <CNavItem href="#">Selects</CNavItem>
          </CNavGroup>
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilSettings} /> Settings
            </>
          }
        >
          <CNavItem href="#">Profile</CNavItem>
          <CNavItem href="#">Security</CNavItem>
        </CNavGroup>
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI
        </CNavItem>
      </CSidebarNav>
      <CSidebarFooter className="border-top">
        <CButton color="primary" size="sm" onClick={() => setLocked(!locked)}>
          {locked ? 'Unlock collapsing' : 'Lock the active section open'}
        </CButton>
      </CSidebarFooter>
    </CSidebar>
  )
}
