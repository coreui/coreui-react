import React from 'react'
import { CButton, CSpinner } from '@coreui/react'

export const SpinnerButtonsExample = () => {
  return (
    <>
      <CButton color="primary" disabled>
        <CSpinner as="span" size="sm" aria-hidden="true" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton color="primary" disabled>
        <CSpinner as="span" className="me-2" size="sm" aria-hidden="true" />
        <span role="status">Loading...</span>
      </CButton>
    </>
  )
}
