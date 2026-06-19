import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasBodyScrollingAndBackdropExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Enable both scrolling &amp; backdrop
      </CButton>
      <COffcanvas placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>Try scrolling the rest of the page to see this option in action.</COffcanvasBody>
      </COffcanvas>
    </>
  )
}
