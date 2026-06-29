import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsValidationExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInputValid"
        floatingClassName="mb-3"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        valid
      />
      <CFormInput
        type="email"
        id="floatingInputInvalid"
        floatingLabel="Email addresss"
        placeholder="name@example.com"
        defaultValue="test@example.com"
        invalid
      />
    </>
  )
}
