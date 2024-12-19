import React from 'react'
import { CProgress, CProgressStacked } from '@coreui/react'

export const ProgressMultipleBarsExample = () => {
  return (
    <CProgressStacked>
      <CProgress value={15} />
      <CProgress color="success" value={30} />
      <CProgress color="info" value={20} />
    </CProgressStacked>
  )
}
