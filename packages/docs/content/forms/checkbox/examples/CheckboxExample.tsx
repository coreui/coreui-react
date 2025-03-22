import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxExample = () => {
  return (
    <>
      <CFormCheck id="flexCheckDefault" label="Default checkbox" />
      <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
    </>
  )
}
