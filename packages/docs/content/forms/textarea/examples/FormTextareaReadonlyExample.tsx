import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FormTextareaReadonlyExample = () => {
  return (
    <CFormTextarea
      placeholder="Readonly textarea"
      aria-label="Readonly textarea example"
      disabled
      readOnly
    ></CFormTextarea>
  )
}
