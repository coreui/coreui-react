import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Context } from './CProgress'
//component - CoreUI / CProgressBar

const CProgressBar = directProps => {

  const { inheritedProps } = useContext(Context)
  const props = {...inheritedProps, ...directProps }

  const {
    children,
    className,
    //
    innerRef,
    color,
    striped,
    animated,
    precision,
    showPercentage,
    showValue,
    max,
    value,
    ...attributes
  } = props

  // render
  const progressBarClasses = classNames(
    'progress-bar',
    animated && 'progress-bar-animated',
    (striped || animated) && 'progress-bar-striped',
    color && `bg-${color}`,
    className
  )

  const valLabel = Number(value).toFixed(precision)
  const percentLabel = Number((value / max) * 100).toFixed(precision) + '%'

  return (
    <div
      className={progressBarClasses}
      style={{ width: `${(value / max) * 100}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
      {...attributes}
      ref={innerRef}
    >
      { showPercentage ? percentLabel : showValue ? valLabel : children }
    </div>
  )
}

CProgressBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  value: PropTypes.number,
  max: PropTypes.number,
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  precision: PropTypes.number,
  showPercentage: PropTypes.bool,
  showValue: PropTypes.bool
};

export default CProgressBar
