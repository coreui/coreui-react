import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupHorizontalExample = () => {
  const breakpoints = [
    'horizontal',
    'horizontal-sm',
    'horizontal-md',
    'horizontal-lg',
    'horizontal-xl',
    'horizontal-xxl',
  ]
  return (
    <>
      {breakpoints.map((breakpoint, index) => (
        <CListGroup className="mb-2" layout={breakpoint} key={index}>
          <CListGroupItem>Cras justo odio</CListGroupItem>
          <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
          <CListGroupItem>Morbi leo risus</CListGroupItem>
        </CListGroup>
      ))}
    </>
  )
}
