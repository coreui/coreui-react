import React, { useState } from 'react'
import { CButton, CFocusTrap, CFormCheck } from '@coreui/react'

export const FocusTrapConditionalExample = () => {
  const [mode, setMode] = useState<'view' | 'edit'>('view')
  const [enableTrap, setEnableTrap] = useState(true)

  return (
    <div>
      <div className="mb-3 d-flex gap-3 align-items-center">
        <CButton 
          color={mode === 'edit' ? 'success' : 'primary'}
          onClick={() => setMode(mode === 'edit' ? 'view' : 'edit')}
        >
          {mode === 'edit' ? 'Save Changes' : 'Edit Content'}
        </CButton>
        
        <CFormCheck 
          id="trapToggle"
          checked={enableTrap}
          onChange={(e) => setEnableTrap(e.target.checked)}
          label="Enable focus trap in edit mode"
        />
      </div>

      <div className="row g-3">
        <div className="col-md-8">
          <CFocusTrap active={mode === 'edit' && enableTrap}>
            <div className={`border rounded p-3 ${mode === 'edit' ? 'bg-warning bg-opacity-10 border-warning' : 'bg-light'}`}>
              <h5>Content Editor</h5>
              
              {mode === 'edit' ? (
                <div>
                  <p className="mb-3 text-muted">
                    Edit mode active - focus is {enableTrap ? 'trapped' : 'not trapped'} within this container
                  </p>
                  
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                      type="text" 
                      id="title"
                      className="form-control" 
                      defaultValue="Sample Title"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea 
                      id="content"
                      className="form-control" 
                      rows={4}
                      defaultValue="This is some sample content that can be edited."
                    />
                  </div>
                  
                  <div className="mb-3">
                    <CFormCheck 
                      id="published"
                      label="Published"
                      defaultChecked
                    />
                  </div>
                  
                  <div className="d-flex gap-2">
                    <CButton 
                      color="success" 
                      onClick={() => setMode('view')}
                    >
                      Save Changes
                    </CButton>
                    <CButton 
                      color="secondary" 
                      onClick={() => setMode('view')}
                    >
                      Cancel
                    </CButton>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="mb-3 text-muted">View mode - content is read-only</p>
                  
                  <h6>Sample Title</h6>
                  <p>This is some sample content that can be edited.</p>
                  
                  <div className="d-flex align-items-center">
                    <span className="badge bg-success me-2">Published</span>
                    <CButton 
                      color="primary" 
                      size="sm"
                      onClick={() => setMode('edit')}
                    >
                      Edit
                    </CButton>
                  </div>
                </div>
              )}
            </div>
          </CFocusTrap>
        </div>
        
        <div className="col-md-4">
          <div className="border rounded p-3">
            <h6>Outside Content</h6>
            <p className="text-muted small mb-3">
              These elements show the focus trap behavior when editing.
            </p>
            
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder="External input"
              disabled={mode === 'edit' && enableTrap}
            />
            
            <CButton 
              color="outline-primary" 
              size="sm"
              disabled={mode === 'edit' && enableTrap}
            >
              External Action
            </CButton>
            
            {mode === 'edit' && enableTrap && (
              <div className="mt-2">
                <small className="text-muted">
                  ⚠️ These elements are not accessible via Tab while focus is trapped
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}