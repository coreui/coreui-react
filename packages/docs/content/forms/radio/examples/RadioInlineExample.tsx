import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioInlineExample = () => {
  return (
    <>
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox1"
        value="option1"
        label="1"
      />
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox2"
        value="option2"
        label="2"
      />
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox3"
        value="option3"
        label="3 (disabled)"
        disabled
      />
    </>
  )
}
