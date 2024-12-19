import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibTwitter } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'

import { CCol, CRow, CWidgetStatsD } from '@coreui/react'

export const WidgetStatsDExample = () => {
  return (
    <CRow>
      <CCol xs={6}>
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4 text-white" icon={cibFacebook} height={52} />}
          chart={
            <CChartLine
              className="position-absolute w-100 h-100"
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
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
          style={{ '--cui-card-cap-bg': '#3b5998' }}
          values={[
            { title: 'friends', value: '89K' },
            { title: 'feeds', value: '459' },
          ]}
        />
      </CCol>
      <CCol xs={6}>
        <CWidgetStatsD
          className="mb-3"
          icon={<CIcon className="my-4 text-white" icon={cibTwitter} height={52} />}
          chart={
            <CChartLine
              className="position-absolute w-100 h-100"
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [1, 13, 9, 17, 34, 41, 38],
                    fill: true,
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
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
          style={{ '--cui-card-cap-bg': '#00aced' }}
          values={[
            { title: 'folowers', value: '973K' },
            { title: 'tweets', value: '1.792' },
          ]}
        />
      </CCol>
    </CRow>
  )
}
