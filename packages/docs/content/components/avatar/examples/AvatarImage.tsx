import React from 'react'
import { CAvatar } from '@coreui/react'

import Avatar1 from '@assets/images/avatars/1.jpg'
import Avatar2 from '@assets/images/avatars/2.jpg'
import Avatar3 from '@assets/images/avatars/3.jpg'

export const AvatarImage = () => {
  return (
    <>
      <CAvatar src={Avatar1} />
      <CAvatar src={Avatar2} />
      <CAvatar src={Avatar3} />
    </>
  )
}
