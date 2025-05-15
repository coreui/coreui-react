import React from 'react'
import { withPrefix } from 'gatsby'
import { CAvatar } from '@coreui/react'

export const AvatarImage = () => {
  return (
    <>
      <CAvatar src={withPrefix('/images/avatars/1.jpg')} />
      <CAvatar src={withPrefix('/images/avatars/2.jpg')} />
      <CAvatar src={withPrefix('/images/avatars/3.jpg')} />
    </>
  )
}
