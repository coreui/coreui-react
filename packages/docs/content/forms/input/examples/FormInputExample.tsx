import React from 'react'
import { CForm, CFormInput } from '@coreui/react'

export const FormInputExample = () => {
  return (
    <CForm>
      <CFormInput
        type="email"
        id="exampleFormControlInput1"
        label="Email address"
        placeholder="name@example.com"
        text="Must be 8-20 characters long."
        aria-describedby="exampleFormControlInputHelpInline"
      />
    </CForm>
  )
}
