import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CInputGroup
const CInputGroup = props => {

  const {
    className,
    //
    innerRef,
    size,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'input-group',
    size && `input-group-${size}`,
    className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CInputGroup.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.string
};

export default CInputGroup
