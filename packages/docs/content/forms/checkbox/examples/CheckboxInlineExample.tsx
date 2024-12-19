import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxInlineExample = () => {
  return (
    <>
      <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
      <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
      <CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled />
    </>
  )
}
