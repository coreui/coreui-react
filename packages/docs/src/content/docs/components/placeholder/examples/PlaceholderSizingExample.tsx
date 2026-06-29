import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderSizingExample = () => {
  return (
    <>
      <CPlaceholder xs={12} size="lg" />
      <CPlaceholder xs={12} />
      <CPlaceholder xs={12} size="sm" />
      <CPlaceholder xs={12} size="xs" />
    </>
  )
}
