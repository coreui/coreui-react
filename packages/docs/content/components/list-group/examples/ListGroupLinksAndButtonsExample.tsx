import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupLinksAndButtonsExample = () => {
  return (
    <CListGroup>
      <CListGroupItem as="a" href="#" active>Cras justo odio</CListGroupItem>
      <CListGroupItem as="a" href="#">Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem as="a" href="#"> Morbi leo risus</CListGroupItem>
      <CListGroupItem as="a" href="#">Porta ac consectetur ac</CListGroupItem>
      <CListGroupItem as="a" href="#" disabled>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  )
}
