import React from 'react'
import { CCard, CCardFooter, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroups3Example = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
      <CCardFooter>Footer</CCardFooter>
    </CCard>
  )
}
