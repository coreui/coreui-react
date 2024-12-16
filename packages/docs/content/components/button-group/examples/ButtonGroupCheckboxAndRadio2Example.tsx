import React from 'react'
import { CButtonGroup, CFormCheck } from '@coreui/react'

export const ButtonGroupCheckboxAndRadio2Example = () => {
  return (
    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        label="Radio 1"
      />
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        label="Radio 2"
      />
      <CFormCheck
        type="radio"
        button={{ color: 'primary', variant: 'outline' }}
        name="btnradio"
        id="btnradio3"
        autoComplete="off"
        label="Radio 3"
      />
    </CButtonGroup>
  )
}
