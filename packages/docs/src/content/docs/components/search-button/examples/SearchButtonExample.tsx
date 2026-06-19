import React, { useState } from 'react'
import {
  CBadge,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSearchButton,
} from '@coreui/react'

export const SearchButtonExample = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CSearchButton
        onTrigger={() => setVisible(true)}
        aria-label="Open search dialog"
        aria-controls="search-button-modal"
        shortcut="meta+/,ctrl+/"
      />
      <CModal visible={visible} onClose={() => setVisible(false)} aria-labelledby="search-button-modal-title">
        <CModalHeader>
          <CModalTitle id="search-button-modal-title" className="w-100">
            <CFormInput type="search" placeholder="Search" aria-label="Search" />
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="text-body-secondary small mb-2">Recent searches</p>
          <CListGroup flush>
            <CListGroupItem as="button" type="button" className="d-flex justify-content-between align-items-center">
              CoreUI components overview
              <CBadge color="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
            <CListGroupItem as="button" type="button" className="d-flex justify-content-between align-items-center">
              Modal dialog examples
              <CBadge color="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
            <CListGroupItem as="button" type="button" className="d-flex justify-content-between align-items-center">
              Sidebar navigation customization
              <CBadge color="secondary" shape="rounded-pill">
                Open
              </CBadge>
            </CListGroupItem>
          </CListGroup>
        </CModalBody>
      </CModal>
    </>
  )
}
