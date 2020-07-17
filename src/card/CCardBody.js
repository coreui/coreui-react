import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import { sharedPropTypes } from './CCard'
//component - CoreUI / CCardBody

const CCardBody = props => {

  const {
    tag: Tag,
    className,
    //
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
    'card-body',
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

CCardBody.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  ...sharedPropTypes
}

CCardBody.defaultProps = {
  tag: 'div'
}

export default CCardBody
