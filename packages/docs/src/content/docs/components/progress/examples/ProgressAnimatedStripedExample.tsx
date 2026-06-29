import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressAnimatedStripedExample = () => {
  return (
    <>
      <CProgress color="success" variant="striped" animated value={25} />
      <CProgress color="info" variant="striped" animated value={50} />
      <CProgress color="warning" variant="striped" animated value={75} />
      <CProgress color="danger" variant="striped" animated value={100} />
    </>
  )
}
