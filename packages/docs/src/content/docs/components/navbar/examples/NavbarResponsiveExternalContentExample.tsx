import React, { useState } from 'react'
import { CCollapse, CContainer, CNavbar, CNavbarToggler } from '@coreui/react'

export const NavbarResponsiveExternalContentExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CCollapse id="navbarToggleExternalContent" visible={visible} data-coreui-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </CCollapse>
      <CNavbar colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="navbarToggleExternalContent"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
        </CContainer>
      </CNavbar>
    </>
  )
}
