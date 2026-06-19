import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderColorExample = () => {
  return (
    <>
      <CPlaceholder xs={12} />

      <CPlaceholder color="primary" xs={12} />
      <CPlaceholder color="secondary" xs={12} />
      <CPlaceholder color="success" xs={12} />
      <CPlaceholder color="danger" xs={12} />
      <CPlaceholder color="warning" xs={12} />
      <CPlaceholder color="info" xs={12} />
      <CPlaceholder color="light" xs={12} />
      <CPlaceholder color="dark" xs={12} />
    </>
  )
}
