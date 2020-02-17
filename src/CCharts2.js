import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, tagPropType} from './Shared/helper.js';
//import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

//component - CoreUI / CCharts

const CCharts = props=>{

  const {
    children,
    className,
    cssModule,
    //
    innerRef,
    type,
    data,
    options,
    ...attributes
  } = props;

  const set = {
    line: Line,
    bar: Bar,
    doughnut: Doughnut,
    pie: Pie,
    polar: Polar,
    radar: Radar
  }

  const Chart = set[type];

  // render

  const classes = mapToCssModules(classNames(
    className,
    'c-chart-wrapper'
  ), cssModule);

  return (
    <div className={classes}>
      <Chart {...attributes} data={data} options={options} ref={innerRef} />
    </div>
  );

}

CCharts.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  data: PropTypes.object,
  options: PropTypes.object,
  type: PropTypes.oneOf(['line', 'bar', 'doughnut', 'pie', 'polar', 'radar'])
};

CCharts.defaultProps = {
  type: 'line'
};

export default CCharts;
