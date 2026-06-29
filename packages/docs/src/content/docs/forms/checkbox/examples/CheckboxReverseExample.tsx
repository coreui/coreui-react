import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxReverseExample = () => {
  return (
    <>
      <CFormCheck reverse id="reverseCheckbox1" value="option1" label="Reverse checkbox" />
      <CFormCheck
        reverse
        id="reverseCheckbox2"
        value="option2"
        label="Disabled reverse checkbox"
        disabled
      />
    </>
  )
}
