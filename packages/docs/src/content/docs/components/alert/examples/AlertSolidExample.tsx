import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertSolidExample = () => {
  return (
    <>
      <CAlert color="primary" variant="solid">
        A simple solid primary alert—check it out!
      </CAlert>
      <CAlert color="secondary" variant="solid">
        A simple solid secondary alert—check it out!
      </CAlert>
      <CAlert color="success" variant="solid">
        A simple solid success alert—check it out!
      </CAlert>
      <CAlert color="danger" variant="solid">
        A simple solid danger alert—check it out!
      </CAlert>
      <CAlert color="warning" variant="solid">
        A simple solid warning alert—check it out!
      </CAlert>
      <CAlert color="info" variant="solid">
        A simple solid info alert—check it out!
      </CAlert>
      <CAlert color="light" variant="solid" className="text-high-emphasis">
        A simple solid light alert—check it out!
      </CAlert>
      <CAlert color="dark" variant="solid">
        A simple solid dark alert—check it out!
      </CAlert>
    </>
  )
}
