import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CButtonClose

const CButtonClose = props => {

  const {
    children,
    className,
    cssModule,
    //
    buttonClass,
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    buttonClass,
    className
  ), cssModule)

  return (
    <button
      className={classes}
      aria-label="Close"
      {...attributes} 
      ref={innerRef}
    >
      { children || String.fromCharCode(215) }
    </button>
  )

}

CButtonClose.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  buttonClass: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
}

CButtonClose.defaultProps = {
  buttonClass: 'close'
}

export default CButtonClose
