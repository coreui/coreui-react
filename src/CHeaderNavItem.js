import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CHeaderNavItem

const CHeaderNavItem = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav-item'
  ), cssModule)

  return (
    <li className={classes} {...attributes} ref={innerRef} />
  )

}

CHeaderNavItem.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};


export default CHeaderNavItem