import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'
import { Chart } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'

export const ChartPolarAreaExample = () => {
  const chartRef = useRef<Chart<'polarArea'> | null>(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance

        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales?.r?.grid) {
          options.scales.r.grid.color = getStyle('--cui-border-color-translucent')
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data: ChartData<'polarArea'> = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }

  const options: ChartOptions<'polarArea'> = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
        angleLines: {
          color: getStyle('--cui-border-color-translucent'),
        },
        pointLabels: {
          color: getStyle('--cui-body-color'),
        },
        beginAtZero: true,
      },
    },
  }

  return <CChart type="polarArea" data={data} options={options} ref={chartRef} />
}
