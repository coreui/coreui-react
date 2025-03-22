import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressBackgroundsExample = () => {
  return (
    <>
      <CProgress color="success" value={25} />
      <CProgress color="info" value={50} />
      <CProgress color="warning" value={75} />
      <CProgress color="danger" value={100} />
    </>
  )
}
