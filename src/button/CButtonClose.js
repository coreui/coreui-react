import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CButtonClose

const CButtonClose = props => {

  const {
    children,
    className,
    //
    buttonClass,
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    buttonClass,
    className
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  buttonClass: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

CButtonClose.defaultProps = {
  buttonClass: 'close'
}

export default CButtonClose
