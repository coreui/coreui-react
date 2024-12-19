import React from 'react'
import { CCard, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroupsExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
    </CCard>
  )
}
