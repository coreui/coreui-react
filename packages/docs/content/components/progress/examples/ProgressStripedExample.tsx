import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressStripedExample = () => {
  return (
    <>
      <CProgress color="success" variant="striped" value={25} />
      <CProgress color="info" variant="striped" value={50} />
      <CProgress color="warning" variant="striped" value={75} />
      <CProgress color="danger" variant="striped" value={100} />
    </>
  )
}
