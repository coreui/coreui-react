import React from 'react'
import { CButton, CPlaceholder } from '@coreui/react'

export const Placeholder2Example = () => {
  return (
    <>
      <p aria-hidden="true">
        <CPlaceholder xs={6} />
      </p>
      <CPlaceholder as={CButton} color="primary" aria-hidden="true" disabled href="#" tabIndex={-1} xs={4} />
    </>
  )
}
