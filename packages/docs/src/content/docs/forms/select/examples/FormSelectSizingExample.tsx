import React from 'react'
import { CFormSelect } from '@coreui/react'

export const FormSelectSizingExample = () => {
  return (
    <>
      <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
      <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </CFormSelect>
    </>
  )
}
