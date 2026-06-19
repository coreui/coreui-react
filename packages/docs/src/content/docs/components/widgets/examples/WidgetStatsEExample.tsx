import React from 'react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

import { CCol, CRow, CWidgetStatsE } from '@coreui/react'

export const WidgetStatsEExample = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsE
          className="mb-3"
          chart={
            <CChartBar
              className="mx-auto"
              style={{ height: '40px', width: '80px' }}
              data={{
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                datasets: [
                  {
                    backgroundColor: '#321fdb',
                    borderColor: 'transparent',
                    borderWidth: 1,
                    data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
              }}
            />
          }
          title="Widget title"
          value="89.9%"
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsE
          className="mb-3"
          chart={
            <CChartLine
              className="mx-auto"
              style={{ height: '40px', width: '80px' }}
              data={{
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                datasets: [
                  {
                    backgroundColor: 'transparent',
                    borderColor: '#321fdb',
                    borderWidth: 2,
                    data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
              }}
            />
          }
          title="Widget title"
          value="89.9%"
        />
      </CCol>
    </CRow>
  )
}
