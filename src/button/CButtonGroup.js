import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CButtonGroup

const CButtonGroup = props => {

  const {
    className,
    //
    innerRef,
    size,
    vertical,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    size ? 'btn-group-' + size : false,
    vertical ? 'btn-group-vertical' : 'btn-group'
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.oneOf(['', 'sm', 'lg']),
  vertical: PropTypes.bool
}


export default CButtonGroup
