import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgeContextualVariations = () => {
  return (
    <>
      <CBadge color="primary">primary</CBadge>
      <CBadge color="success">success</CBadge>
      <CBadge color="danger">danger</CBadge>
      <CBadge color="warning">warning</CBadge>
      <CBadge color="info">info</CBadge>
      <CBadge textBgColor="light">light</CBadge>
      <CBadge color="dark">dark</CBadge>
    </>
  )
}
