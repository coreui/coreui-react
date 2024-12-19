import React, { useState } from 'react'
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react'

export const OffcanvasPlacementBottomExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Toggle bottom offcanvas
      </CButton>
      <COffcanvas placement="bottom" visible={visible} onHide={() => setVisible(false)}>
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          Content for the offcanvas goes here. You can place just about any React component or custom elements
          here.
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
