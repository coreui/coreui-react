import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import toNumber from 'lodash.tonumber';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CProgress

const CProgress = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    barClassName,
    barProps,
    height,
    value,
    max,
    animated,
    striped,
    color,
    bar,
    multi,
    showPercentage,
    showValue,
    precision,
    size,
    ...attributes
  } = props;

  let valueNumber = toNumber(value);
  let percent = (valueNumber / toNumber(max)) * 100;

  // render

  const progressClasses = mapToCssModules(classNames(
    className,
    size ? 'progress-'+size : null,
    'progress'
  ), cssModule);

  const progressBarClasses = mapToCssModules(classNames(
    'progress-bar',
    bar ? className || barClassName : barClassName,
    animated ? 'progress-bar-animated' : null,
    color ? `bg-${color}` : null,
    striped || animated ? 'progress-bar-striped' : null
  ), cssModule);

  if (precision)
    percent = percent.toPrecision(precision);
  if (precision)
    valueNumber = valueNumber.toPrecision(precision);

  const ProgressBar = multi ? children : (
    <div
      className={progressBarClasses}
      style={{ width: `${percent}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
      {...barProps}
    >
      {showPercentage?percent+'%': showValue?value: children}
    </div>
  );

  if (bar) {
    return ProgressBar;
  }

  let style;
  if (height)
    style = {height};
  else
    style = {};

  return (
    <Tag {...attributes} style={style} className={progressClasses} ref={innerRef}>
      {ProgressBar}
    </Tag>
  );

}

CProgress.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  barClassName: PropTypes.string,
  barProps: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  max: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  precision: PropTypes.number,
  showPercentage: PropTypes.bool,
  showValue: PropTypes.bool,
  size: PropTypes.string
};

CProgress.defaultProps = {
  tag: 'div',
  value: 0,
  max: 100,
};

export default CProgress;
