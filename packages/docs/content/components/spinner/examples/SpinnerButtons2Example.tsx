import React from 'react'
import { CButton, CSpinner } from '@coreui/react'

export const SpinnerButtons2Example = () => {
  return (
    <>
      <CButton color="primary" disabled>
        <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton color="primary" disabled>
        <CSpinner as="span" className="me-2" size="sm" variant="grow" aria-hidden="true" />
        <span role="status">Loading...</span>
      </CButton>
    </>
  )
}
