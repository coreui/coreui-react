import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CFocusTrap } from '@coreui/react'

export const FocusTrapFocusControlExample = () => {
  const [firstElementTrap, setFirstElementTrap] = useState(false)
  const [containerTrap, setContainerTrap] = useState(false)

  return (
    <div>
      <div className="row g-3">
        <div className="col-md-6">
          <CCard>
            <CCardHeader>
              <strong>focusFirstElement={true}</strong>
              <small className="text-muted ms-2">Good for forms and menus</small>
            </CCardHeader>
            <CCardBody>
              <CButton 
                color="primary" 
                size="sm" 
                onClick={() => setFirstElementTrap(!firstElementTrap)}
                className="mb-3"
              >
                {firstElementTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>
              
              <CFocusTrap active={firstElementTrap} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <p className="mb-2"><strong>First element receives focus</strong></p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="This gets focus first"
                  />
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Second input"
                  />
                  <CButton color="secondary" size="sm">
                    Submit
                  </CButton>
                </div>
              </CFocusTrap>
            </CCardBody>
          </CCard>
        </div>
        
        <div className="col-md-6">
          <CCard>
            <CCardHeader>
              <strong>focusFirstElement={false}</strong>
              <small className="text-muted ms-2">Good for containers and panels</small>
            </CCardHeader>
            <CCardBody>
              <CButton 
                color="primary" 
                size="sm" 
                onClick={() => setContainerTrap(!containerTrap)}
                className="mb-3"
              >
                {containerTrap ? 'Deactivate' : 'Activate'} Trap
              </CButton>
              
              <CFocusTrap active={containerTrap} focusFirstElement={false}>
                <div 
                  className="p-3 border rounded bg-light"
                  tabIndex={-1} // Make container focusable
                  style={{ outline: containerTrap ? '2px solid #0d6efd' : 'none' }}
                >
                  <p className="mb-2"><strong>Container receives focus</strong></p>
                  <p className="small text-muted mb-2">
                    The container itself is focused, useful for scrollable regions
                  </p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="First input"
                  />
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Second input"
                  />
                  <CButton color="secondary" size="sm">
                    Submit
                  </CButton>
                </div>
              </CFocusTrap>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}
