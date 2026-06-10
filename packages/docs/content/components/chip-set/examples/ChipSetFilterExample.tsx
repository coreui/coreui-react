import React from 'react'
import { CChip, CChipSet } from '@coreui/react'

export const ChipSetFilterExample = () => {
  return (
    <CChipSet filter defaultSelected={['development', 'sales']}>
      <CChip value="design">Design</CChip>
      <CChip value="development">Development</CChip>
      <CChip value="marketing">Marketing</CChip>
      <CChip value="sales">Sales</CChip>
    </CChipSet>
  )
}
