import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadiosExample = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck label="Cras justo odio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Dapibus ac facilisis in" defaultChecked />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Morbi leo risus" defaultChecked />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="orta ac consectetur ac" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck label="Vestibulum at eros" />
      </CListGroupItem>
    </CListGroup>
  )
}
