import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

export const TableVariantsExample = () => {
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Class</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">Default</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="primary">
          <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="secondary">
          <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="success">
          <CTableHeaderCell scope="row">Success</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="danger">
          <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="warning">
          <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="info">
          <CTableHeaderCell scope="row">Info</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="light">
          <CTableHeaderCell scope="row">Light</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
        <CTableRow color="dark">
          <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
          <CTableDataCell>Cell</CTableDataCell>
          <CTableDataCell>Cell</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}
