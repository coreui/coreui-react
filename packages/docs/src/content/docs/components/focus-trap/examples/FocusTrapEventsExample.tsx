import React, { useState, useCallback } from 'react'
import { CAlert, CButton, CFocusTrap } from '@coreui/react'

export const FocusTrapEventsExample = () => {
  const [isActive, setIsActive] = useState(false)
  const [events, setEvents] = useState<string[]>([])

  const addEvent = useCallback((event: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setEvents(prev => [`${timestamp}: ${event}`, ...prev.slice(0, 4)])
  }, [])

  const handleActivate = useCallback(() => {
    addEvent('Focus trap activated')
    // You could also trigger screen reader announcements here
  }, [addEvent])

  const handleDeactivate = useCallback(() => {
    addEvent('Focus trap deactivated')
    // You could also trigger analytics events or cleanup here
  }, [addEvent])

  return (
    <div>
      <div className="mb-3">
        <CButton 
          color="primary" 
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'Deactivate' : 'Activate'} Focus Trap
        </CButton>
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <CFocusTrap 
            active={isActive}
            onActivate={handleActivate}
            onDeactivate={handleDeactivate}
            focusFirstElement={true}
          >
            <div className={`p-3 border rounded ${isActive ? 'bg-light border-primary' : ''}`}>
              <h5>Interactive Content</h5>
              <p className="mb-3">
                This area demonstrates event callbacks when the focus trap activates/deactivates.
              </p>
              
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  id="username"
                  className="form-control" 
                  placeholder="Enter username"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="form-control" 
                  placeholder="Enter email"
                />
              </div>
              
              <div className="d-flex gap-2">
                <CButton color="success">
                  Submit
                </CButton>
                <CButton 
                  color="secondary" 
                  onClick={() => setIsActive(false)}
                >
                  Close
                </CButton>
              </div>
            </div>
          </CFocusTrap>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded p-3">
            <h6>Event Log</h6>
            {events.length === 0 ? (
              <p className="text-muted small">No events yet</p>
            ) : (
              <div>
                {events.map((event, index) => (
                  <CAlert 
                    key={index} 
                    color="info" 
                    className="small py-2 mb-1"
                  >
                    {event}
                  </CAlert>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
