import React from 'react'
import { CFormInput } from '@coreui/react'

export const FloatingLabelsExample = () => {
  return (
    <>
      <CFormInput
        type="email"
        id="floatingInput"
        floatingClassName="mb-3"
        floatingLabel="Email address"
        placeholder="name@example.com"
      />
      <CFormInput
        type="password"
        id="floatingPassword"
        floatingLabel="Password"
        placeholder="Password"
      />
    </>
  )
}
