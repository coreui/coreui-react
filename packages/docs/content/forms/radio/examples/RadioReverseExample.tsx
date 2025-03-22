import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioReverseExample = () => {
  return (
    <>
      <CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio" />
      <CFormCheck
        reverse
        type="radio"
        id="reverseOption2"
        value="option2"
        label="Disabled reverse radio"
        disabled
      />
    </>
  )
}
