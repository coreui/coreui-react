import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CToastBody

const CToastBody = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = mapToCssModules(classNames(
    'toast-body', className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CToastBody.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
};

export default CToastBody
