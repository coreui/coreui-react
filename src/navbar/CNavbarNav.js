import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CNavbarNav

const CNavbarNav = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'navbar-nav', className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CNavbarNav.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CNavbarNav.defaultProps = {
  tag: 'ul'
};

export default CNavbarNav
