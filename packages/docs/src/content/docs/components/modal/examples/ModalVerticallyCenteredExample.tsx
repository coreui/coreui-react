import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalVerticallyCenteredExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Vertically centered modal
      </CButton>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
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
