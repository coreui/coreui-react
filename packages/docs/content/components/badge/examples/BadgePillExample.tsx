import React from 'react'
import { CBadge } from '@coreui/react'

export const BadgePillExample = () => {
  return (
    <>
      <CBadge color="primary" shape="rounded-pill">primary</CBadge>
      <CBadge color="success" shape="rounded-pill">success</CBadge>
      <CBadge color="danger" shape="rounded-pill">danger</CBadge>
      <CBadge color="warning" shape="rounded-pill">warning</CBadge>
      <CBadge color="info" shape="rounded-pill">info</CBadge>
      <CBadge textBgColor="light" shape="rounded-pill">light</CBadge>
      <CBadge color="dark" shape="rounded-pill">dark</CBadge>
    </>
  )
}
