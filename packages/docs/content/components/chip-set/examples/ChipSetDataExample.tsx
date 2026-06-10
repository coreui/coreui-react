import React from 'react'
import { CChipSet } from '@coreui/react'

export const ChipSetDataExample = () => {
  const chips = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ]

  return <CChipSet selectable chips={chips} defaultSelected={['vue']} />
}
