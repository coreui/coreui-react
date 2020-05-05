import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CModalTitle
const CModalTitle = props => {

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
    'modal-title', className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )
}

CModalTitle.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CModalTitle.defaultProps = {
  tag: 'h5'
};

export default CModalTitle
