import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressExample = () => {
  return (
    <>
      <CProgress value={0} />
      <CProgress value={25} />
      <CProgress value={50} />
      <CProgress value={75} />
      <CProgress value={100} />
    </>
  )
}
