import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CSpinner

const CSpinner = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    grow,
    size,
    color,
    ...attributes
  } = props

  //render
  const type = grow ? 'grow' : 'border'

  const classes = mapToCssModules(classNames(
    `spinner-${type}`,
    size && `spinner-${type}-${size}`,
    color && `text-${color}`,
    className
  ), cssModule)

  return (
    <Tag 
      className={classes} 
      ariaHidden="false" 
      ariaLabel="Loading" 
      role="status" 
      {...attributes}
      ref={innerRef}
    />
  )
}

CSpinner.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  grow: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string
};

CSpinner.defaultProps = {
  tag: 'div'
};

export default CSpinner
