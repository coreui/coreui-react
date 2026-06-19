import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonComponentsExample = () => {
  return (
    <>
      <CButton as="a" color="primary" href="#" role="button">Link</CButton>
      <CButton type="submit" color="primary">Button</CButton>
      <CButton as="input" type="button" color="primary" value="Input" />
      <CButton as="input" type="submit" color="primary" value="Submit" />
      <CButton as="input" type="reset" color="primary" value="Reset" />
    </>
  )
}
