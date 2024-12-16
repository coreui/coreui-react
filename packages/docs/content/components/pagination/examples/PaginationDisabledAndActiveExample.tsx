import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationDisabledAndActiveExample = () => {
  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous" disabled>
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem active>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}
