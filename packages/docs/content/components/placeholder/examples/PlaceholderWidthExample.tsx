import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderWidthExample = () => {
  return (
    <>
      <CPlaceholder xs={6} />
      <CPlaceholder className="w-75" />
      <CPlaceholder style={{ width: '30%' }} />
    </>
  )
}
