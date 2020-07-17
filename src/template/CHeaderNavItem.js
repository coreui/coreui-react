import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CHeaderNavItem

const CHeaderNavItem = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    'c-header-nav-item'
  )

  return (
    <li className={classes} {...attributes} ref={innerRef} />
  )

}

CHeaderNavItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};


export default CHeaderNavItem