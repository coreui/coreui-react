import { CCol, CContainer, CRow } from '@coreui/react'

export const ColumnsWrappingExample = () => (
  <CContainer>
    <CRow>
      <CCol xs={9}>.col-9</CCol>
      <CCol xs={4}>
        .col-4
        <br />
        Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one
        contiguous unit.
      </CCol>
      <CCol xs={6}>
        .col-6
        <br />
        Subsequent columns continue along the new line.
      </CCol>
    </CRow>
  </CContainer>
)
