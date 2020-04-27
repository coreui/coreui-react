import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CNavbarNav

const CNavbarNav = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'navbar-nav', className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CNavbarNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CNavbarNav.defaultProps = {
  tag: 'ul'
};

export default CNavbarNav
