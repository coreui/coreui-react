import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'

export const ModalFullscreenExample = () => {
  const [visible, setVisible] = useState(false)
  const [visibleSm, setVisibleSm] = useState(false)
  const [visibleMd, setVisibleMd] = useState(false)
  const [visibleLg, setVisibleLg] = useState(false)
  const [visibleXL, setVisibleXL] = useState(false)
  const [visibleXXL, setVisibleXXL] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Full screen
      </CButton>
      <CButton color="primary" onClick={() => setVisibleSm(!visibleSm)}>
        Full screen below sm
      </CButton>
      <CButton color="primary" onClick={() => setVisibleMd(!visibleMd)}>
        Full screen below md
      </CButton>
      <CButton color="primary" onClick={() => setVisibleLg(!visibleLg)}>
        Full screen below lg
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXL(!visibleXL)}>
        Full screen below xl
      </CButton>
      <CButton color="primary" onClick={() => setVisibleXXL(!visibleXXL)}>
        Full screen below xxl
      </CButton>
      <CModal
        fullscreen
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="FullscreenExample1"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="sm"
        visible={visibleSm}
        onClose={() => setVisibleSm(false)}
        aria-labelledby="FullscreenExample2"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="md"
        visible={visibleMd}
        onClose={() => setVisibleMd(false)}
        aria-labelledby="FullscreenExample3"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="lg"
        visible={visibleLg}
        onClose={() => setVisibleLg(false)}
        aria-labelledby="FullscreenExample4"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="xl"
        visible={visibleXL}
        onClose={() => setVisibleXL(false)}
        aria-labelledby="FullscreenExample5"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
      <CModal
        fullscreen="xxl"
        visible={visibleXXL}
        onClose={() => setVisibleXXL(false)}
        aria-labelledby="FullscreenExample6"
      >
        <CModalHeader>
          <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
        </CModalHeader>
        <CModalBody>...</CModalBody>
      </CModal>
    </>
  )
}
