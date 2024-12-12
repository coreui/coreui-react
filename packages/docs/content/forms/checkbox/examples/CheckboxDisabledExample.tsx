import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxDisabledExample = () => {
  return (
    <>
      <CFormCheck label="Disabled checkbox" disabled />
      <CFormCheck label="Disabled checked checkbox" defaultChecked disabled />
    </>
  )
}
