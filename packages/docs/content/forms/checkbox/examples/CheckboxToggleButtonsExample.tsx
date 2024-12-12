import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxToggleButtonsExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check"
        autoComplete="off"
        label="Single toggle"
      />
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check-2"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check-3"
        autoComplete="off"
        label="Disabled"
        disabled
      />
    </>
  )
}
