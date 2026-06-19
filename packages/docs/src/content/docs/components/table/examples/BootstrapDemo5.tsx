import {
  CBadge,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

export const BootstrapDemo5 = () => (
<>
<CTable responsive="xl">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</>
)
