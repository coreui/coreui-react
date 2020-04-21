import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CCard

const CCard = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    textColor,
    borderColor,
    align,
    accentColor,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'card',
    align ? `text-${align}` : false,
    textColor ? `text-${textColor}` : false,
    color ? `bg-${color}` : false,
    borderColor ? `border-${borderColor}` : false,
    accentColor ? `card-accent-${accentColor}` : false,
  ), cssModule)


  return (
    <Tag 
      className={classes} 
      {...attributes} 
      ref={innerRef}
    />
  )
}

export const sharedPropTypes = {
  align: PropTypes.oneOf(['', 'left', 'center', 'right']),
  color: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string
}

CCard.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  accentColor: PropTypes.string,
  ...sharedPropTypes
}

CCard.defaultProps = {
  tag: 'div'
}

export default CCard
