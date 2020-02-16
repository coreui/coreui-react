import React, {useState, useEffect, useRef, useMemo} from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import Chart from 'react-chartjs-2';
//import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import Chart from 'chart.js'
import { customTooltips } from '@coreui/coreui-chartjs/dist/js/coreui-chartjs.js'
import "@coreui/coreui-chartjs/dist/css/coreui-chartjs.css";

//component - CoreUI / CCharts

const CCharts = props=>{

  const {
    //
    innerRef,
    datasets,
    labels,
    options,
    plugins,
    type,
    ...attributes
  } = props;

  //console.log(Chart);

  const compData = useRef({firstRun:true}).current;
  const [chart, setChart] = useState();
  const ref = useRef();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//  const type = ''

  // methods

  const renderChart = ()=>{
    destroyChart()
    setChart(new Chart(
      ref.current.getContext('2d'),
      chartConfig
    ))
  }
  const updateChart = ()=>{
    Object.assign(chart, chartConfig)
    chart.update()
  }
  const destroyChart = ()=>{
    if (chart) {
      chart.destroy()
    }
  }

  // vars

  const _uid = '';
  const safeId = (()=>{
    // as long as this._uid() works there is no need to generate the key
    const key = () => Math.random().toString(36).replace('0.', '')
    return '__safe_id__' + _uid || key()
  })();
  const computedDatasets = (()=>{
    return datasets
  })();
  //
  const computedLabels = (()=>{
    if (labels && typeof labels !== 'string') {
      return labels
    } else if (!datasets || !datasets[0] || !datasets[0].data) {
      return []
    }
    const emptyLabels = Array(datasets[0].data.length).fill('')
    if (labels === 'indexes') {
      return emptyLabels.map((u, i) => i + 1)
    } else if (labels === 'months') {
      return emptyLabels.map((u, i) => months[i % 12])
    }
    return emptyLabels
  })();
  const computedData = (()=>{
    return {
      datasets: computedDatasets,
      labels: computedLabels
    }
  })();
  const customTooltips = (()=>{
    if (options && options.tooltips) {
      return
    }
    return {
      tooltips: {
        enabled: false,
        custom: customTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor(tooltipItem, chart) {
            function getValue(prop) {
              return typeof prop === 'object' ? prop[tooltipItem.index] : prop
            }
            const dataset = chart.data.datasets[tooltipItem.datasetIndex]
            //tooltipLabelColor is coreUI custom prop used only here
            const backgroundColor = getValue(
              dataset.tooltipLabelColor ||
              dataset.pointHoverBackgroundColor ||
              dataset.borderColor ||
              dataset.backgroundColor
            )
            return {
              backgroundColor
            }
          }
        }
      }
    }
  })();
  const computedOptions = (()=>{
    return Object.assign({}, options, customTooltips || {})
  })();
  const chartConfig = (()=>{
    return {
      type: type,
      data: computedData,
      options: computedOptions || options,
      plugins: plugins
    }
  })();

  //watch

  //chartConfig
  useMemo(()=>{
    if (compData.firstRun) return;
    updateChart();
  }, [chartConfig]);


  // effect

  useEffect(() => {
    renderChart();
    compData.firstRun = false;
    return () => {
      destroyChart()
    };
  }, []);

  // render

  return (
    <div {...attributes} ref={innerRef}>
      <canvas id={safeId} ref={ref} />
    </div>
  );

}

CCharts.propTypes = {
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  datasets: PropTypes.array,
  labels: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.object,
  plugins: PropTypes.array,
  type: PropTypes.string
};

CCharts.defaultProps = {
};

export default CCharts;
