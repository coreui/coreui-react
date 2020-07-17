import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CNavbarText

const CNavbarText = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'navbar-text', className
  )

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )
}

CNavbarText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

CNavbarText.defaultProps = {
  tag: 'div'
};

export default CNavbarText
