import React from 'react'
import { CBadge, CButton } from '@coreui/react'

export const BadgePositionedExample = () => {
  return (
    <>
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="top-start" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="top-end" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <br />
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="bottom-start" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
      <CButton color="primary" className="position-relative">
        Profile
        <CBadge color="danger" position="bottom-end" shape="rounded-pill">
          99+ <span className="visually-hidden">unread messages</span>
        </CBadge>
      </CButton>
    </>
  )
}
