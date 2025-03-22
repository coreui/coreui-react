import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressHeightExample = () => {
  return (
    <>
      <CProgress height={1} value={25} />
      <CProgress height={20} value={25} />
    </>
  )
}
