import React from 'react'
import { CCol, CRow, CWidgetStatsB } from '@coreui/react'

export const WidgetStatsBExample = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsB
          className="mb-3"
          progress={{ color: 'success', value: 75 }}
          text="Widget helper text"
          title="Widget title"
          value="89.9%"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsB
          className="mb-3"
          color="primary"
          inverse
          progress={{ value: 75 }}
          text="Widget helper text"
          title="Widget title"
          value="89.9%"
        />
      </CCol>
    </CRow>
  )
}
