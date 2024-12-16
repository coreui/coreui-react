import React from 'react'
import { CForm, CFormTextarea } from '@coreui/react'

export const FormTextareaExample = () => {
  return (
    <CForm>
      <CFormTextarea
        id="exampleFormControlTextarea1"
        label="Example textarea"
        rows={3}
        text="Must be 8-20 words long."
      ></CFormTextarea>
    </CForm>
  )
}
