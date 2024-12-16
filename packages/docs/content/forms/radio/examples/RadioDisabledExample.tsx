import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioDisabledExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioDisabled"
        label="Disabled radio"
        disabled
      />
      <CFormCheck
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioCheckedDisabled"
        label="Disabled checked radio"
        defaultChecked
        disabled
      />
    </>
  )
}
