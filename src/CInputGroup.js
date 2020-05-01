import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CInputGroup
const CInputGroup = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    size,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'input-group',
    size && `input-group-${size}`,
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CInputGroup.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  size: PropTypes.string
};

export default CInputGroup
