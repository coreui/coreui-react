import React from 'react'
import { CToast, CToastBody, CToastClose } from '@coreui/react'

export const ToastCustomContentExample = () => {
  return (
    <CToast autohide={false} visible={true} className="align-items-center">
      <div className="d-flex">
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
        <CToastClose className="me-2 m-auto" />
      </div>
    </CToast>
  )
}
