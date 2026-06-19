import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioStackedExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
        label="Default radio"
        defaultChecked
      />
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="option2"
        label="Second default radio"
      />
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios3"
        value="option3"
        label="Disabled radio"
        disabled
      />
    </>
  )
}
