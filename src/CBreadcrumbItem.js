import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CBreadcrumbItem

const CBreadcrumbItem = props => {

  const {
    className,
    //
    innerRef,
    active,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  )

  return (
    <li 
      className={classes}
      role="presentation"
      aria-current={active ? 'page' : undefined}
      {...attributes}
      ref={innerRef} 
    />
  )

}

CBreadcrumbItem.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool
}

export default CBreadcrumbItem