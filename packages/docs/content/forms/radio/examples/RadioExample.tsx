import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        label="Default radio"
      />
      <CFormCheck
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        label="Checked radio"
        defaultChecked
      />
    </>
  )
}
