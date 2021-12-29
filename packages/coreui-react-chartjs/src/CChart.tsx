import PropTypes from 'prop-types'
import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from 'react'
import classNames from 'classnames'

import Chart, { ChartData, ChartOptions, ChartType, InteractionItem, Plugin } from 'chart.js/auto'
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs'

import assign from 'lodash/assign'
import find from 'lodash/find'
import merge from 'lodash/merge'

export interface CChartProps extends HTMLAttributes<HTMLCanvasElement | HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Enables custom html based tooltips instead of standard tooltips.
   *
   * @default true
   */
  customTooltips?: boolean
  /**
   * The data object that is passed into the Chart.js chart (more info).
   */
  data: ChartData | ((canvas: HTMLCanvasElement) => ChartData)
  /**
   * A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions.
   *
   * {@link https://www.chartjs.org/docs/latest/general/accessibility.html More Info}
   */
  fallbackContent?: React.ReactNode
  /**
   * Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
   */
  getDatasetAtEvent?: (
    dataset: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>,
  ) => void
  /**
   * Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
   */
  getElementAtEvent?: (
    element: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>,
  ) => void
  /**
   * Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.
   */
  getElementsAtEvent?: (
    elements: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>,
  ) => void
  /**
   * Height attribute applied to the rendered canvas.
   *
   * @default 150
   */
  height?: number
  /**
   * ID attribute applied to the rendered canvas.
   */
  id?: string
  /**
   * The options object that is passed into the Chart.js chart.
   *
   * {@link https://www.chartjs.org/docs/latest/general/options.html More Info}
   */
  options?: ChartOptions
  /**
   * The plugins array that is passed into the Chart.js chart (more info)
   *
   * {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}
   */
  plugins?: Plugin[]
  /**
   * If true, will tear down and redraw chart on all updates.
   *
   * @default false
   */
  redraw?: boolean
  /**
   * Chart.js chart type.
   *
   * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
   */
  type: ChartType
  /**
   * Width attribute applied to the rendered canvas.
   *
   * @default 300
   */
  width?: number
  /**
   * Put the chart into the wrapper div element.
   *
   * @default true
   */
  wrapper?: boolean
}

export const CChart = forwardRef<Chart | undefined, CChartProps>((props, ref) => {
  const {
    className,
    customTooltips = true,
    data,
    id,
    fallbackContent,
    getDatasetAtEvent,
    getElementAtEvent,
    getElementsAtEvent,
    height = 150,
    options,
    plugins = [],
    redraw = false,
    type,
    width = 300,
    wrapper = true,
    ...rest
  } = props

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const computedData = useMemo(() => {
    if (typeof data === 'function') {
      return canvasRef.current ? data(canvasRef.current) : { datasets: [] }
    } else return merge({}, data)
  }, [data, canvasRef.current])

  const computedOptions = useMemo(() => {
    return customTooltips
      ? merge({}, options, {
          plugins: {
            tooltip: {
              enabled: false,
              mode: 'index',
              position: 'nearest',
              external: cuiCustomTooltips,
            },
          },
        })
      : options
  }, [data, canvasRef.current, options])

  const [chart, setChart] = useState<Chart>()

  useImperativeHandle<Chart | undefined, Chart | undefined>(ref, () => chart, [chart])

  const renderChart = () => {
    if (!canvasRef.current) return

    setChart(
      new Chart(canvasRef.current, {
        type,
        data: computedData,
        options: computedOptions,
        plugins,
      }),
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnClick = (e: any) => {
    if (!chart) return

    getDatasetAtEvent &&
      getDatasetAtEvent(
        chart.getElementsAtEventForMode(e, 'dataset', { intersect: true }, false),
        e,
      )
    getElementAtEvent &&
      getElementAtEvent(
        chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false),
        e,
      )
    getElementsAtEvent &&
      getElementsAtEvent(chart.getElementsAtEventForMode(e, 'index', { intersect: true }, false), e)
  }

  const updateChart = () => {
    if (!chart) return

    if (options) {
      chart.options = { ...computedOptions }
    }

    if (!chart.config.data) {
      chart.config.data = computedData
      chart.update()
      return
    }

    const { datasets: newDataSets = [], ...newChartData } = computedData
    const { datasets: currentDataSets = [] } = chart.config.data

    // copy values
    assign(chart.config.data, newChartData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chart.config.data.datasets = newDataSets.map((newDataSet: any) => {
      // given the new set, find it's current match
      const currentDataSet = find(
        currentDataSets,
        (d) => d.label === newDataSet.label && d.type === newDataSet.type,
      )

      // There is no original to update, so simply add new one
      if (!currentDataSet || !newDataSet.data) return newDataSet

      if (!currentDataSet.data) {
        currentDataSet.data = []
      } else {
        currentDataSet.data.length = newDataSet.data.length
      }

      // copy in values
      assign(currentDataSet.data, newDataSet.data)

      // apply dataset changes, but keep copied data
      return {
        ...currentDataSet,
        ...newDataSet,
        data: currentDataSet.data,
      }
    })

    chart.update()
  }

  const destroyChart = () => {
    if (chart) chart.destroy()
  }

  useEffect(() => {
    renderChart()

    return () => destroyChart()
  }, [])

  useEffect(() => {
    if (redraw) {
      destroyChart()
      setTimeout(() => {
        renderChart()
      }, 0)
    } else {
      updateChart()
    }
  }, [props, computedData])

  const canvas = (ref: React.Ref<HTMLCanvasElement>) => {
    return (
      <canvas
        {...(!wrapper && className && { className: className })}
        data-testid="canvas"
        height={height}
        id={id}
        onClick={(e: React.MouseEvent<HTMLCanvasElement>) => {
          handleOnClick(e)
        }}
        ref={ref}
        role="img"
        width={width}
        {...rest}
      >
        {fallbackContent}
      </canvas>
    )
  }

  return wrapper ? (
    <div className={classNames('chart-wrapper', className)} {...rest}>
      {canvas(canvasRef)}
    </div>
  ) : (
    canvas(canvasRef)
  )
})

CChart.propTypes = {
  className: PropTypes.string,
  customTooltips: PropTypes.bool,
  data: PropTypes.any.isRequired, // TODO: check
  fallbackContent: PropTypes.node,
  getDatasetAtEvent: PropTypes.func,
  getElementAtEvent: PropTypes.func,
  getElementsAtEvent: PropTypes.func,
  height: PropTypes.number,
  id: PropTypes.string,
  options: PropTypes.object,
  plugins: PropTypes.array,
  redraw: PropTypes.bool,
  type: PropTypes.oneOf<ChartType>([
    'bar',
    'line',
    'scatter',
    'bubble',
    'pie',
    'doughnut',
    'polarArea',
    'radar',
  ]).isRequired,
  width: PropTypes.number,
  wrapper: PropTypes.bool,
}

CChart.displayName = 'CChart'
