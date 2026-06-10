import React from 'react'
import { CChip, CChipSet } from '@coreui/react'

export const ChipSetSingleExample = () => {
  return (
    <CChipSet selectable selectionMode="single" defaultSelected={['small']}>
      <CChip value="small">Small</CChip>
      <CChip value="medium">Medium</CChip>
      <CChip value="large">Large</CChip>
    </CChipSet>
  )
}
