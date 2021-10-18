import React, { forwardRef } from 'react'
import { CChart, CChartProps } from './CChart'
import Chart from 'chart.js/auto'

export const CChartBar = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="bar" ref={ref} />
))

CChartBar.displayName = 'CChartBar'

export const CChartBubble = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="bubble" ref={ref} />
))

CChartBubble.displayName = 'CChartBubble'

export const CChartDoughnut = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="doughnut" ref={ref} />
))

CChartDoughnut.displayName = 'CChartDoughnut'

export const CChartLine = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="line" ref={ref} />
))

CChartLine.displayName = 'CChartLine'

export const CChartPie = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="pie" ref={ref} />
))

CChartPie.displayName = 'CChartPie'

export const CChartPolarArea = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="polarArea" ref={ref} />
))

CChartPolarArea.displayName = 'CChartPolarArea'

export const CChartRadar = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="radar" ref={ref} />
))

CChartRadar.displayName = 'CChartRadar'

export const CChartScatter = forwardRef<Chart | undefined, CChartProps>((props, ref) => (
  <CChart {...props} type="scatter" ref={ref} />
))

CChartScatter.displayName = 'CChartScatter'
