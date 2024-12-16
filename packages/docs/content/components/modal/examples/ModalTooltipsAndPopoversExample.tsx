import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CPopover,
  CTooltip,
} from '@coreui/react'

export const ModalTooltipsAndPopoversExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Launch demo modal
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="TooltipsAndPopoverExample"
      >
        <CModalHeader>
          <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Popover in a modal</h5>
          <p>
            This
            <CPopover title="Popover title" content="Popover body content is set in this property.">
              <CButton color="primary">button</CButton>
            </CPopover>{' '}
            triggers a popover on click.
          </p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p>
            <CTooltip content="Tooltip">
              <CLink>This link</CLink>
            </CTooltip>{' '}
            and
            <CTooltip content="Tooltip">
              <CLink>that link</CLink>
            </CTooltip>{' '}
            have tooltips on hover.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
