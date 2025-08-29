import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

export const FocusTrapModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <CButton color="primary" onClick={() => setModalVisible(true)}>
        Open Contact Form
      </CButton>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Contact Form</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email"
              className="form-control" 
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message"
              className="form-control" 
              rows={3}
              placeholder="Enter your message"
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary">Send Message</CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}
