import React from 'react'
import {
  CCard,
  CCardFooter,
  CListGroup,
  CListGroupItem,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

export default function FreePagination1() {
  return (
    <CCard className="mx-auto" style={{ maxWidth: '50rem' }}>
      <CListGroup flush className="opacity-25">
        <CListGroupItem>1. Cras justo odio</CListGroupItem>
        <CListGroupItem>2. Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>...</CListGroupItem>
        <CListGroupItem>...</CListGroupItem>
        <CListGroupItem>...</CListGroupItem>
        <CListGroupItem>10. Vestibulum at eros</CListGroupItem>
      </CListGroup>
      <CCardFooter className="d-flex align-items-center">
        <div className="small text-secondary me-auto">Showing 1 to 10 of 200 results</div>
        <CPagination className="mb-0" aria-label="Page navigation example">
          <CPaginationItem aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>...</CPaginationItem>
          <CPaginationItem>18</CPaginationItem>
          <CPaginationItem>19</CPaginationItem>
          <CPaginationItem>20</CPaginationItem>
          <CPaginationItem aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </CPaginationItem>
        </CPagination>
      </CCardFooter>
    </CCard>
  )
}
