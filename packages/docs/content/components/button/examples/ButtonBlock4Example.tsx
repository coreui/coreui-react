import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock4Example = () => {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <CButton color="primary" className="me-md-2">Button</CButton>
      <CButton color="primary">Button</CButton>
    </div>
  )
}
