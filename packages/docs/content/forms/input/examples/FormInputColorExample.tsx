import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputColorExample = () => {
  return (
    <CFormInput
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      label="Color picker"
      title="Choose your color"
    />
  )
}
