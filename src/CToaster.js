import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CToaster

const CToaster = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    position,
    ...attributes
  } = props

  // inherit closeButton, autohide, fade??
  // render
  const classes = mapToCssModules(classNames(
    'toaster',
    position && position !== 'static' && 'toaster-' + position,
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CToaster.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  position: PropTypes.oneOf([
    '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
    'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
  ])
};

CToaster.defaultProps = {
  position: 'top-right'
};

export default CToaster
