import React from 'react'
import { CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroups2Example = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardHeader>Header</CCardHeader>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
    </CCard>
  )
}
