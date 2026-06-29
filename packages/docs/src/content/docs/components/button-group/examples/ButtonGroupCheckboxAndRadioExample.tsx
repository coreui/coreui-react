import React from 'react'
import { CButtonGroup, CFormCheck } from '@coreui/react'

export const ButtonGroupCheckboxAndRadioExample = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck1"
        autoComplete="off"
        label="Checkbox 1"
      />
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck2"
        autoComplete="off"
        label="Checkbox 2"
      />
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btncheck3"
        autoComplete="off"
        label="Checkbox 3"
      />
    </CButtonGroup>
  )
}
