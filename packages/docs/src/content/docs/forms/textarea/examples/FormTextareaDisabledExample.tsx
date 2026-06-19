import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FormTextareaDisabledExample = () => {
  return (
    <CFormTextarea
      className="mb-3"
      placeholder="Disabled textarea"
      aria-label="Disabled textarea example"
      disabled
    ></CFormTextarea>
  )
}
