import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CProgressBar from './CProgressBar'

export const Context = React.createContext({})
//component - CoreUI / CProgress

const CProgress = props => {

  const {
    children,
    className,
    //
    innerRef,
    size,
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

  const inheritedProps = {
    color,
    striped,
    animated,
    precision,
    showPercentage,
    showValue,
    max,
    value
  }

  const progressClasses = classNames(
    'progress', 
    size && 'progress-' + size,
    className
  )

  // render
  return (
    <div 
      className={progressClasses} 
      {...attributes} 
      ref={innerRef}
    >
      <Context.Provider value={{ inheritedProps }}>
        { children || <CProgressBar/>}
      </Context.Provider>
    </div>
  )

}

CProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  precision: PropTypes.number,
  showPercentage: PropTypes.bool,
  showValue: PropTypes.bool
};

CProgress.defaultProps = {
  value: 0,
  max: 100,
  precision: 0
};

export default CProgress
