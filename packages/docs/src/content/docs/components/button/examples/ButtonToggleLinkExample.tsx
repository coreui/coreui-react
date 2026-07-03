import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonToggleLinkExample = () => {
  return (
    <>
      <div className="d-flex gap-1 mb-3">
        <CButton as="a" href="#" role="button" toggle>
          Toggle link
        </CButton>
        <CButton as="a" href="#" role="button" toggle active>
          Active toggle link
        </CButton>
        <CButton as="a" role="button" toggle disabled>
          Disabled toggle link
        </CButton>
      </div>
      <div className="d-flex gap-1">
        <CButton as="a" color="primary" href="#" role="button" toggle>
          Toggle link
        </CButton>
        <CButton as="a" color="primary" href="#" role="button" toggle active>
          Active toggle link
        </CButton>
        <CButton as="a" color="primary" role="button" toggle disabled>
          Disabled toggle link
        </CButton>
      </div>
    </>
  )
}
