import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasResponsiveExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" className="d-lg-none" onClick={() => setVisible(true)}>
        Toggle offcanvas
      </CButton>
      <CAlert className="d-none d-lg-block" color="info">
        Resize your browser to show the responsive offcanvas toggle.
      </CAlert>
      <COffcanvas backdrop="static" placement="start" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          This is content within an <code>.offcanvas-lg</code>.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
