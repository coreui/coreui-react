import React from 'react'
import { withPrefix } from 'gatsby'
import { CAvatar, CChip } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

export const ChipSizesExample = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-1 mb-3">
        <CChip size="sm">Small</CChip>
        <CChip size="sm">
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Small with icon
        </CChip>
        <CChip size="sm">
          <img className="chip-img" src={withPrefix('/images/avatars/1.jpg')} alt="" width="16" height="16" />
          Small with avatar
        </CChip>
        <CChip size="sm">
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
          Small with avatar 2
        </CChip>
        <CChip size="sm" removable>
          Small removable
        </CChip>
      </div>

      <div className="d-flex flex-wrap gap-1 mb-3">
        <CChip>Default</CChip>
        <CChip>
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Default with icon 1
        </CChip>
        <CChip>
          <img className="chip-img" src={withPrefix('/images/avatars/1.jpg')} alt="" width="16" height="16" />
          Default with avatar
        </CChip>
        <CChip>
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
          Default with avatar1
        </CChip>
        <CChip removable>Default removable</CChip>
      </div>

      <div className="d-flex flex-wrap gap-1">
        <CChip size="lg">Large</CChip>
        <CChip size="lg">
          <span className="chip-icon">
            <CIcon icon={cilUser} />
          </span>
          Small with icon 1
        </CChip>
        <CChip size="lg">
          <img className="chip-img" src={withPrefix('/images/avatars/1.jpg')} alt="" width="16" height="16" />
          Large with avatar
        </CChip>
        <CChip size="lg">
          <CAvatar color="primary" textColor="white">
            L
          </CAvatar>
          Large with avatar 2
        </CChip>
        <CChip size="lg" removable>
          Large removable
        </CChip>
      </div>
    </>
  )
}
