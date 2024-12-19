import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioToggleButtonsOutlinedStylesExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="success-outlined"
        autoComplete="off"
        label="Radio"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'danger', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="danger-outlined"
        autoComplete="off"
        label="Radio"
      />
    </>
  )
}
