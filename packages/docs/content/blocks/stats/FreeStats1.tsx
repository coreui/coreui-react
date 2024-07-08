import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowTop, cilOptions } from '@coreui/icons'
import { CChartLine } from '@coreui/react-chartjs'

import {
  CCard,
  CCardBody,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react/src/index'

export default function FreeStats1() {
  return (
    <CCard className="mx-auto" color="primary" textColor="white" style={{ maxWidth: '24rem' }}>
      <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
        <div>
          <span className="fs-4 fw-semibold">$9.000</span>
          <span className="fs-6 ms-2">
            (40.9% <CIcon icon={cilArrowTop} />)
          </span>
          <div>Widget title</div>
        </div>
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            <CIcon icon={cilOptions} className="text-white" />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CCardBody>
      <CChartLine
        className="mt-3 mx-3"
        style={{ height: '70px' }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
              pointBackgroundColor: '#5856d6',
              data: [65, 59, 84, 84, 51, 55, 40],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              min: 30,
              max: 89,
              display: false,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
          elements: {
            line: {
              borderWidth: 1,
              tension: 0.4,
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4,
            },
          },
        }}
      />
    </CCard>
  )
}
