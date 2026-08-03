import { CCol } from '@coreui/react'

export const ColumnsStandaloneExample = () => (
  <>
    <CCol xs={3} className="bg-light p-3 border">
      .col-3: width of 25%
    </CCol>
    <CCol sm={9} className="bg-light p-3 border">
      .col-sm-9: width of 75% above sm breakpoint
    </CCol>
  </>
)
