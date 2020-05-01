import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CInputGroupText
const CInputGroupText = props => {

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
    'input-group-text', className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef}/>
  )

}

CInputGroupText.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

CInputGroupText.defaultProps = {
  tag: 'div'
};

export default CInputGroupText
