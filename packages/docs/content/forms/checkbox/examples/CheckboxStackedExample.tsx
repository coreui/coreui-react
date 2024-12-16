import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxStackedExample = () => {
  return (
    <>
      <CFormCheck id="defaultCheck1" label="Default checkbox" />
      <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
    </>
  )
}
