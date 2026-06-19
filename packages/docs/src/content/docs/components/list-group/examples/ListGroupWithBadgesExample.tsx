import React from 'react'
import { CBadge, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupWithBadgesExample = () => {
  return (
    <CListGroup>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Cras justo odio
        <CBadge color="primary" shape="rounded-pill">
          14
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <CBadge color="primary" shape="rounded-pill">
          2
        </CBadge>
      </CListGroupItem>
      <CListGroupItem className="d-flex justify-content-between align-items-center">
        Morbi leo risus
        <CBadge color="primary" shape="rounded-pill">
          1
        </CBadge>
      </CListGroupItem>
    </CListGroup>
  )
}
