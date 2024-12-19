import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputDisabledExample = () => {
  return (
    <>
      <CFormInput
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
      />
      <CFormInput
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
    </>
  )
}
