import React, { useState } from 'react'
import {
  CCloseButton,
  CFormInput,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CSearchButton,
} from '@coreui/react'

export const SearchButtonOffcanvasExample = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CSearchButton
        onTrigger={() => setVisible(true)}
        shortcut="meta+shift+o,ctrl+shift+o"
        aria-label="Open search panel"
        aria-controls="search-button-offcanvas"
      />

      <COffcanvas
        id="search-button-offcanvas"
        placement="end"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Search panel</COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CFormInput type="search" className="mb-3" placeholder="Search..." aria-label="Search in panel" />
          <p className="mb-0">Use this space for filters, recent searches, or command shortcuts.</p>
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}
