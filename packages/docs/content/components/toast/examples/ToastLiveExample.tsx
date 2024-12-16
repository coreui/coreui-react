import React, { useRef, useState } from 'react'
import { CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/react'

export const ToastLiveExample = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [toast, addToast] = useState<any>()
  const toaster = useRef(null)
  const exampleToast = (
    <CToast>
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
  )
  return (
    <>
      <CButton color="primary" onClick={() => addToast(exampleToast)}>
        Send a toast
      </CButton>
      <CToaster className="p-3" placement="top-end" push={toast} ref={toaster} />
    </>
  )
}
