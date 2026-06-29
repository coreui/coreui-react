import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarLetter = () => {
  return (
    <>
      <CAvatar color="primary" textColor="white">
        CUI
      </CAvatar>
      <CAvatar color="secondary">CUI</CAvatar>
      <CAvatar color="warning" textColor="white">
        CUI
      </CAvatar>
    </>
  )
}
