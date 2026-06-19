import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilChartPie } from '@coreui/icons'
import { CCol, CRow, CWidgetStatsC } from '@coreui/react'

export const WidgetStatsCExample = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilChartPie} height={36} />}
          progress={{ color: 'success', value: 75 }}
          title="Widget title"
          value="89.9%"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsC
          className="mb-3"
          icon={<CIcon icon={cilChartPie} height={36} />}
          color="primary"
          inverse
          progress={{ value: 75 }}
          title="Widget title"
          value="89.9%"
        />
      </CCol>
    </CRow>
  )
}
