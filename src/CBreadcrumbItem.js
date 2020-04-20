import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CBreadcrumbItem

const CBreadcrumbItem = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    active,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule)

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
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool
}

export default CBreadcrumbItem