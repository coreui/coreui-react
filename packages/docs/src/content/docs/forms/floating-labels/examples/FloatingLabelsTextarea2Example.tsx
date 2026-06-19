import React from 'react'
import { CFormTextarea } from '@coreui/react'

export const FloatingLabelsTextarea2Example = () => {
  return (
    <CFormTextarea
      placeholder="Leave a comment here"
      id="floatingTextarea2"
      floatingLabel="Comments"
      style={{ height: '100px' }}
    ></CFormTextarea>
  )
}
