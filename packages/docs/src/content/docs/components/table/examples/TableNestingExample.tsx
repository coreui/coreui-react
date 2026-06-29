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

export const TableNestingExample = () => (
  <>
    <CTable striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Class</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1</CTableHeaderCell>
          <CTableDataCell>Mark</CTableDataCell>
          <CTableDataCell>Otto</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell colSpan={4}>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">A</CTableHeaderCell>
                  <CTableDataCell>First</CTableDataCell>
                  <CTableDataCell>Last</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">B</CTableHeaderCell>
                  <CTableDataCell>First</CTableDataCell>
                  <CTableDataCell>Last</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">C</CTableHeaderCell>
                  <CTableDataCell>First</CTableDataCell>
                  <CTableDataCell>Last</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CTableHeaderCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">3</CTableHeaderCell>
          <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
          <CTableDataCell>@twitter</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </>
)
