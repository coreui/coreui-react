import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalToggleBetweenModalsExample = () => {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Open first modal
      </CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ToggleBetweenModalsExample1"
      >
        <CModalHeader>
          <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Show a second modal and hide this one with the button below.</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(false)
              setVisible2(true)
            }}
          >
            Open second modal
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
        visible={visible2}
        onClick={() => {
          setVisible(true)
          setVisible2(false)
        }}
        aria-labelledby="ToggleBetweenModalsExample2"
      >
        <CModalHeader>
          <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Hide this modal and show the first with the button below.</p>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(true)
              setVisible2(false)
            }}
          >
            Back to first
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
