import React from 'react'
import { CChip } from '@coreui/react'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const ChipVariantsExample = () => {
  return (
    <div className="d-flex flex-wrap gap-1">
      {colors.map((color) => (
        <React.Fragment key={color}>
          <CChip color={color} clickable tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
          <CChip color={color} active tabIndex={0}>
            {capitalize(color)} chip
          </CChip>
        </React.Fragment>
      ))}
    </div>
  )
}
