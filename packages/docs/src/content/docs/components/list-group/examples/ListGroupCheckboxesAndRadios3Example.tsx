import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadios3Example = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck hitArea="full" label="First checkbox" value="" id="firstCheckboxStretched" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck hitArea="full" label="Second checkbox" value="" id="secondCheckboxStretched" defaultChecked/>
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck hitArea="full" label="Third checkbox" value="" id="thirdCheckboxStretched"/>
      </CListGroupItem>
    </CListGroup>
  )
}
