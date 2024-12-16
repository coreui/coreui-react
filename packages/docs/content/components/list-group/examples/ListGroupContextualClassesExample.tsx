import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClassesExample = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <CListGroup>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem color={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
