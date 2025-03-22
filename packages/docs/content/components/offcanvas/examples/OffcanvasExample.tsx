import React from 'react'
import { CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from '@coreui/react'

export const OffcanvasExample = () => {
  return (
    <COffcanvas backdrop={false} placement="start" scroll visible={true}>
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton className="text-reset" />
      </COffcanvasHeader>
      <COffcanvasBody>
        Content for the offcanvas goes here. You can place just about any React component or custom elements
        here.
      </COffcanvasBody>
    </COffcanvas>
  )
}
