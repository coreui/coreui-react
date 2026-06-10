import React from 'react'
import { CChip, CChipSet } from '@coreui/react'

export const ChipSetExample = () => {
  return (
    <CChipSet>
      <CChip value="apple">Apple</CChip>
      <CChip value="banana">Banana</CChip>
      <CChip value="cherry">Cherry</CChip>
      <CChip value="date">Date</CChip>
    </CChipSet>
  )
}
