import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertDismissingExample = () => {
  return (
    <CAlert
      color="warning"
      dismissible
      onClose={() => {
        alert('👋 Well, hi there! Thanks for dismissing me.')
      }}
    >
      <strong>Go right ahead</strong> and click that dimiss over there on the right.
    </CAlert>
  )
}
