import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxToggleButtonsOutlinedStylesExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btn-check-outlined"
        autoComplete="off"
        label="Single toggle"
      />
      <CFormCheck
        button={{ color: 'secondary', variant: 'outline' }}
        id="btn-check-2-outlined"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        id="btn-check-3-outlined"
        autoComplete="off"
        label="Checked success"
        defaultChecked
      />
    </>
  )
}
