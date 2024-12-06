import React, { useState } from 'react'
import { CAlert, CButton } from '@coreui/react'

export const AlertLiveExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CAlert color="primary" dismissible visible={visible} onClose={() => setVisible(false)}>
        A simple primary alert—check it out!
      </CAlert>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Show live alert
      </CButton>
    </>
  )
}
