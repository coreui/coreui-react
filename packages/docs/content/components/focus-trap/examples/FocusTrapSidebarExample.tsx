import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  CListGroup,
  CListGroupItem,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  COffcanvasBody,
} from '@coreui/react'

export const FocusTrapSidebarExample = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Open Navigation Sidebar
      </CButton>

      <COffcanvas
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={true}
        scroll={false}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Main Navigation</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CListGroup className="mb-3">
            <CListGroupItem as="button" onClick={() => alert('Dashboard clicked')}>
              📊 Dashboard
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Users clicked')}>
              👥 Users
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Projects clicked')}>
              📁 Projects
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Settings clicked')}>
              ⚙️ Settings
            </CListGroupItem>
            <CListGroupItem as="button" onClick={() => alert('Reports clicked')}>
              📈 Reports
            </CListGroupItem>
          </CListGroup>

          <div className="mt-4 pt-3 border-top">
            <CButton
              color="outline-secondary"
              size="sm"
              onClick={() => setVisible(false)}
              className="me-2"
            >
              Close Sidebar
            </CButton>
            <CButton color="primary" size="sm" onClick={() => alert('Profile clicked')}>
              View Profile
            </CButton>
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </div>
  )
}
