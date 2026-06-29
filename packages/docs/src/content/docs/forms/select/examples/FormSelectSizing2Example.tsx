import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizing2Example = () => {
  return (
    <CFormSelect size="lg" multiple aria-label="Multiple select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  )
}
