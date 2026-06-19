import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowRight, cilChartPie } from '@coreui/icons'
import { CCol, CLink, CRow, CWidgetStatsF } from '@coreui/react'

export const WidgetStatsFExample = () => {
  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            footer={
              <CLink
                className="font-weight-bold font-xs text-body-secondary"
                href="https://coreui.io/"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilChartPie} height={24} />}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            footer={
              <CLink
                className="font-weight-bold font-xs text-body-secondary"
                href="https://coreui.io/"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilChartPie} height={24} />}
            title="Widget title"
            value="89.9%"
          />
        </CCol>
      </CRow>
    </>
  )
}
