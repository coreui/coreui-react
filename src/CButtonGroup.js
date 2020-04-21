import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CButtonGroup

const CButtonGroup = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    size,
    vertical,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  ), cssModule)

  return (
    <div 
      className={classes} 
      role="group"
      {...attributes} 
      ref={innerRef} 
    />
  )
}

CButtonGroup.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  vertical: PropTypes.bool
}


export default CButtonGroup
