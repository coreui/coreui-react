import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabled2Example = () => {
  return (
    <>
      <CButton as="a" href="#" color="primary" disabled>Primary link</CButton>
      <CButton as="a" href="#" color="secondary" disabled>Link</CButton>
    </>
  )
}
