import React, { useState } from 'react'
import { CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapRestoreFocusExample = () => {
  const [restoreTrap, setRestoreTrap] = useState(false)
  const [noRestoreTrap, setNoRestoreTrap] = useState(false)

  return (
    <div>
      
      <div className="row g-3">
        <div className="col-md-6">
          <div className="border rounded p-3">
            <h5>restoreFocus=&#123;true&#125;</h5>
            <p className="text-muted small mb-3">
              Focus returns to the button that opened the trap
            </p>
            
            <CButton 
              color="primary" 
              onClick={() => setRestoreTrap(!restoreTrap)}
              className="mb-3"
            >
              {restoreTrap ? 'Close Trap' : 'Open Trap (Restore Focus)'}
            </CButton>
            
            {restoreTrap && (
              <CFocusTrap active={true} restoreFocus={true} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <h6>Temporary Dialog</h6>
                  <p className="mb-2">Focus will return to the button when closed.</p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Enter some text"
                  />
                  <div className="d-flex gap-2">
                    <CButton 
                      color="success" 
                      size="sm" 
                      onClick={() => setRestoreTrap(false)}
                    >
                      Save & Close
                    </CButton>
                    <CButton 
                      color="secondary" 
                      size="sm" 
                      onClick={() => setRestoreTrap(false)}
                    >
                      Cancel
                    </CButton>
                  </div>
                </div>
              </CFocusTrap>
            )}
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="border rounded p-3">
            <h5>restoreFocus=&#123;false&#125;</h5>
            <p className="text-muted small mb-3">
              Focus goes to document body (or unpredictable location)
            </p>
            
            <CButton 
              color="warning" 
              onClick={() => setNoRestoreTrap(!noRestoreTrap)}
              className="mb-3"
            >
              {noRestoreTrap ? 'Close Trap' : 'Open Trap (No Restore)'}
            </CButton>
            
            {noRestoreTrap && (
              <CFocusTrap active={true} restoreFocus={false} focusFirstElement={true}>
                <div className="p-3 border rounded bg-light">
                  <h6>Navigation Change</h6>
                  <p className="mb-2">Focus won't return when closed.</p>
                  <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Enter destination"
                  />
                  <div className="d-flex gap-2">
                    <CButton 
                      color="primary" 
                      size="sm" 
                      onClick={() => setNoRestoreTrap(false)}
                    >
                      Navigate
                    </CButton>
                    <CButton 
                      color="secondary" 
                      size="sm" 
                      onClick={() => setNoRestoreTrap(false)}
                    >
                      Cancel
                    </CButton>
                  </div>
                </div>
              </CFocusTrap>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
