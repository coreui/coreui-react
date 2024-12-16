import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationWorkingWithIconsExample = () => {
  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}
