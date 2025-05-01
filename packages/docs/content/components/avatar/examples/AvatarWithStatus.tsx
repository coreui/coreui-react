import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarWithStatus = () => {
  return (
    <>
      <CAvatar src={'/images/avatars/1.jpg'} status="success" />
      <CAvatar color="secondary" status="danger">
        CUI
      </CAvatar>
    </>
  )
}
