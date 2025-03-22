import React from 'react'
import { CFormCheck, CListGroup, CListGroupItem } from '@coreui/react'

export const ListGroupCheckboxesAndRadios2Example = () => {
  return (
    <CListGroup>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="First React.js radio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="Second React.js radio" />
      </CListGroupItem>
      <CListGroupItem>
        <CFormCheck type="radio" name="reactListGroupRadio" label="Third React.js radio" />
      </CListGroupItem>
    </CListGroup>
  )
}
