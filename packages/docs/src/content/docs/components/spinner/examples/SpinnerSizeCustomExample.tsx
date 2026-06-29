import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerSizeCustomExample = () => {
  return (
    <>
      <CSpinner style={{ width: '3rem', height: '3rem' }} />
      <CSpinner variant="grow" style={{ width: '3rem', height: '3rem' }} />
    </>
  )
}
