import React from 'react'
import { CForm, CFormInput } from '@coreui/react'

export const FormInputCustomClassNamesExample = () => {
  return (
    <CForm>
      <CFormInput
        type="email"
        id="exampleFormControlInput1"
        label="Email address"
        placeholder="name@example.com"
        text="Must be 8-20 characters long."
        aria-describedby="exampleFormControlInputHelpInline"
        customClassNames={{
          FORM_CONTROL: 'border-3',
          FORM_LABEL: 'fw-semibold text-primary',
          FORM_TEXT: 'text-success',
        }}
      />
    </CForm>
  )
}
