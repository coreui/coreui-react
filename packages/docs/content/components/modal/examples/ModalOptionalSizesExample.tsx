import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalOptionalSizesExample = () => {
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Extra large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Large modal
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Small modal
      </CButton>
      <CModal
        size="xl"
        visible={visibleXL}
        onClose={() => setVisibleXL(false)}
        aria-labelledby="OptionalSizesExample1"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        size="lg"
        visible={visibleLg}
        onClose={() => setVisibleLg(false)}
        aria-labelledby="OptionalSizesExample2"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        size="sm"
        visible={visibleSm}
        onClose={() => setVisibleSm(false)}
        aria-labelledby="OptionalSizesExample3"
      >
        <CModalHeader>
          <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}
