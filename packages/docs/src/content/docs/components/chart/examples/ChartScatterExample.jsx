import React, { useEffect, useRef } from 'react'
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/react-chartjs'

export const ChartScatterExample = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      const chartInstance = chartRef.current
      if (chartInstance) {
        const { options } = chartInstance
        if (options.plugins?.legend?.labels) {
          options.plugins.legend.labels.color = getStyle('--cui-body-color')
        }

        if (options.scales) {
          const xAxis = options.scales.x
          const yAxis = options.scales.y

          if (xAxis?.grid && xAxis?.ticks) {
            xAxis.grid.color = getStyle('--cui-border-color-translucent')
            xAxis.ticks.color = getStyle('--cui-body-color')
          }

          if (yAxis?.grid && yAxis?.ticks) {
            yAxis.grid.color = getStyle('--cui-border-color-translucent')
            yAxis.ticks.color = getStyle('--cui-body-color')
          }
        }

        chartInstance.update()
      }
    }

    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)

    return () => {
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
    }
  }, [])

  const data = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
      y: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
      },
    },
  }

  return <CChart type="scatter" data={data} options={options} ref={chartRef} />
}
