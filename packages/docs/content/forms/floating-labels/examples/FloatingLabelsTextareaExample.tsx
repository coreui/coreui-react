import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FloatingLabelsTextareaExample = () => {
  return (
    <CFormTextarea
      id="floatingTextarea"
      floatingLabel="Comments"
      placeholder="Leave a comment here"
    ></CFormTextarea>
  )
}
