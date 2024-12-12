import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputSizingExample = () => {
  return (
    <>
      <CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example" />
      <CFormInput type="text" placeholder="Default input" aria-label="default input example" />
      <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example" />
    </>
  )
}
