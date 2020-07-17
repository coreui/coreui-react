import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import { sharedPropTypes } from './CCard'

//component - CoreUI / CCardHeader

const CCardHeader = props => {

  const {
    tag: Tag,
    className,
    innerRef,
    color,
    textColor,
    borderColor,
    align,
    ...attributes
  } = props

  //render

  const classes = classNames(
    className,
    'card-header',
    align ? `text-${align}` : false,
    textColor ? `text-${textColor}` : false,
    color ? `bg-${color}` : false,
    borderColor ? `border-${borderColor}` : false
  )

  return (
    <Tag 
      className={classes}
       {...attributes} 
      ref={innerRef} 
    />
  )

}

CCardHeader.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ...sharedPropTypes
}

CCardHeader.defaultProps = {
  tag: 'header'
}

export default CCardHeader
