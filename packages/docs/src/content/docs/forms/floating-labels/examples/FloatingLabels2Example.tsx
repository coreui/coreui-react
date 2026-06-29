import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabels2Example = () => {
  return (
    <CFormInput
      type="email"
      id="floatingInputValue"
      floatingLabel="Input with value"
      placeholder="name@example.com"
      defaultValue="test@example.com"
    />
  )
}
