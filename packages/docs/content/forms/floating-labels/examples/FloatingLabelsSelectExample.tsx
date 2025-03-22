import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FloatingLabelsSelectExample = () => {
  return (
    <CFormSelect
      id="floatingSelect"
      floatingLabel="Works with selects"
      aria-label="Floating label select example"
    >
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  )
}
