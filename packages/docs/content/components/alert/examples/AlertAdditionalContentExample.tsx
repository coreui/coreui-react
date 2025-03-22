import React from 'react'
import { CAlert, CAlertHeading } from '@coreui/react'

export const AlertAdditionalContentExample = () => {
  return (
    <CAlert color="success">
      <CAlertHeading as="h4">Well done!</CAlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </CAlert>
  )
}
