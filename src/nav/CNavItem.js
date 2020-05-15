import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CNavItem

const CNavItem = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'nav-item',
    className
  )


  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )
}

CNavItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CNavItem.defaultProps = {
  tag: 'li',
};

export default CNavItem
