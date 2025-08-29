import React, { useState } from 'react'
import { CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapBasicExample = () => {
  const [trapActive, setTrapActive] = useState(false)

  return (
    <div>
      <CButton color="primary" onClick={() => setTrapActive(!trapActive)}>
        {trapActive ? 'Deactivate' : 'Activate'} Focus Trap
      </CButton>
      
      <div className="mt-3 p-3 border rounded">
        <CFocusTrap active={trapActive}>
          <div className="p-3 bg-light border rounded">
            <h5>Focus Trapped Area</h5>
            <p>Tab and Shift+Tab will cycle within this area when active.</p>
            <div className="d-flex gap-2">
              <input type="text" className="form-control" placeholder="First input" />
              <input type="text" className="form-control" placeholder="Second input" />
              <CButton color="secondary">Button</CButton>
            </div>
          </div>
        </CFocusTrap>
      </div>
      
      <div className="mt-3 p-3 border rounded">
        <h5>Outside Trapped Area</h5>
        <p>These elements are not accessible via Tab when focus trap is active.</p>
        <input type="text" className="form-control mb-2" placeholder="Outside input" />
        <CButton color="warning">Outside Button</CButton>
      </div>
    </div>
  )
}