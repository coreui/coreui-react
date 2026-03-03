import React from 'react'
import { withPrefix } from 'gatsby'
import { CAvatar, CChip } from '@coreui/react'

export const ChipAvatarExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      <CChip>
        <img className="chip-img" src={withPrefix('/images/avatars/1.jpg')} alt="" width="16" height="16" />
        Chip with avatar
      </CChip>
      <CChip>
        <img className="chip-img" src={withPrefix('/images/avatars/1.jpg')} alt="" width="16" height="16" />
        Chip with avatar 2
      </CChip>
      <CChip>
        <CAvatar color="primary" textColor="white">
          L
        </CAvatar>
        Chip with avatar 3
      </CChip>
      <CChip>
        <CAvatar color="success" textColor="white">
          L
        </CAvatar>
        Chip with avatar 4
      </CChip>
    </div>
  )
}
