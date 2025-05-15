import React from 'react'
import { withPrefix } from 'gatsby'
import { CAvatar } from '@coreui/react'

export const AvatarWithStatus = () => {
  return (
    <>
      <CAvatar src={withPrefix('/images/avatars/1.jpg')} status="success" />
      <CAvatar color="secondary" status="danger">
        CUI
      </CAvatar>
    </>
  )
}
