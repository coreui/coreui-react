import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules, tagPropType } from './Shared/helper.js'
import CCol from './CCol'

//component - CoreUI / CLabel
const CLabel = props => {

  const {
    tag,
    className,
    cssModule,
    //
    innerRef,
    hidden,
    variant,
    col,
    ...attributes
  } = props

  // render
  const classes = mapToCssModules(classNames(
    hidden && 'sr-only',
    variant === 'custom-checkbox' && 'custom-control-label',
    variant === 'checkbox' && 'form-check-label',
    variant === 'custom-file' && 'custom-file-label',
    col && 'col-form-label',
    col && typeof col === 'string' && `col-form-label-${col}`,
    className
  ), cssModule)

  const Tag = col ? CCol : tag
  const addLabelTag = col && { tag }

  return (
    <Tag className={classes} {...addLabelTag} {...attributes} ref={innerRef}/>
  )
}

CLabel.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  hidden: PropTypes.bool,
  variant: PropTypes.oneOf(['custom-file', 'checkbox', 'custom-checkbox']),
  col: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

CLabel.defaultProps = {
  tag: 'label'
}

export default CLabel
