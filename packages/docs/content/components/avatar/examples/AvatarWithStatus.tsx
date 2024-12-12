import React from 'react'
import { CAvatar } from '@coreui/react'

import Avatar1 from './../../../assets/images/avatars/1.jpg'

export const AvatarWithStatus = () => {
  return (
    <>
      <CAvatar src={Avatar1} status="success" />
      <CAvatar color="secondary" status="danger">
        CUI
      </CAvatar>
    </>
  )
}
