import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarRounded = () => {
  return (
    <>
      <CAvatar color="primary" textColor="white" shape="rounded">
        CUI
      </CAvatar>
      <CAvatar color="secondary" shape="rounded">
        CUI
      </CAvatar>
      <CAvatar color="warning" textColor="white" shape="rounded">
        CUI
      </CAvatar>
    </>
  )
}
