import React from 'react'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

export const ToastStackingExample = () => {
  return (
    <CToaster className="position-static">
      <CToast autohide={false} visible={true}>
        <CToastHeader closeButton>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <div className="fw-bold me-auto">CoreUI for React.js</div>
          <small>7 min ago</small>
        </CToastHeader>
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
      </CToast>
      <CToast autohide={false} visible={true}>
        <CToastHeader closeButton>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <div className="fw-bold me-auto">CoreUI for React.js</div>
          <small>7 min ago</small>
        </CToastHeader>
        <CToastBody>Hello, world! This is a toast message.</CToastBody>
      </CToast>
    </CToaster>
  )
}
