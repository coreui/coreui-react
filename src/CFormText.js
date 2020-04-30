import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CFormText
const CFormText = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    innerRef,
    //
    color,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'form-text', color && `text-${color}`, className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CFormText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string
};

CFormText.defaultProps = {
  tag: 'small',
  color: 'muted'
};

export default CFormText
