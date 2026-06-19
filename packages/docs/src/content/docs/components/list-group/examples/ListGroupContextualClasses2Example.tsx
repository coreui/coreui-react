import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupContextualClasses2Example = () => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#">
        Dapibus ac facilisis in
      </CListGroupItem>
      {colors.map((color, index) => (
        <CListGroupItem as="a" href="#" color={color} key={index}>
          A simple {color} list group item
        </CListGroupItem>
      ))}
    </CListGroup>
  )
}
