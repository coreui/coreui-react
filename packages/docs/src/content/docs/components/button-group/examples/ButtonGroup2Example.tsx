import React from 'react'
import { CButton, CButtonGroup } from '@coreui/react'

export const ButtonGroup2Example = () => {
  return (
    <CButtonGroup>
      <CButton href="#" color="primary" active>Active link</CButton>
      <CButton href="#" color="primary">Link</CButton>
      <CButton href="#" color="primary">Link</CButton>
    </CButtonGroup>
  )
}
