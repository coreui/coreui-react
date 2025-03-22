import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'

export const CollapseHorizontalExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        color="primary"
        className="mb-3"
        onClick={() => setVisible(!visible)}
        aria-expanded={visible}
        aria-controls="collapseWidthExample"
      >
        Button
      </CButton>
      <div style={{ minHeight: '120px' }}>
        <CCollapse id="collapseWidthExample" horizontal visible={visible}>
          <CCard style={{ width: '300px' }}>
            <CCardBody>
              This is some placeholder content for a horizontal collapse. It's hidden by default and
              shown when triggered.
            </CCardBody>
          </CCard>
        </CCollapse>
      </div>
    </>
  )
}
