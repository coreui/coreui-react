import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderAnimationExample = () => {
  return (
    <>
      <CPlaceholder as="p" animation="glow">
        <CPlaceholder xs={12} />
      </CPlaceholder>
      <CPlaceholder as="p" animation="wave">
        <CPlaceholder xs={12} />
      </CPlaceholder>
    </>
  )
}
