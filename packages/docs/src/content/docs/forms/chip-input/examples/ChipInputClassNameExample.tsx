import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputClassNameExample = () => {
  return (
    <CChipInput
      defaultValue={['Feature', 'Blocking', 'Approved']}
      chipClassName={(value) => {
        const variants: Record<string, string> = {
          approved: 'chip-success',
          blocking: 'chip-danger',
          feature: 'chip-primary',
        }
        return variants[value.trim().toLowerCase()] || 'chip-secondary'
      }}
      placeholder="Type and press Enter"
    />
  )
}
