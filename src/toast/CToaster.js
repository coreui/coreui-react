import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CToaster

const CToaster = props => {

  const {
    className,
    //
    innerRef,
    position,
    ...attributes
  } = props

  // inherit closeButton, autohide, fade??
  // render
  const classes = classNames(
    'toaster',
    position && position !== 'static' && 'toaster-' + position,
    className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CToaster.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  position: PropTypes.oneOf([
    '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
    'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
  ])
};

CToaster.defaultProps = {
  position: 'top-right'
};

export default CToaster
