import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'

//component - CoreUI / CSpinner

const CSpinner = props => {

  const {
    tag: Tag,
    className,
    //
    innerRef,
    grow,
    size,
    color,
    ...attributes
  } = props

  //render
  const type = grow ? 'grow' : 'border'

  const classes = classNames(
    `spinner-${type}`,
    size && `spinner-${type}-${size}`,
    color && `text-${color}`,
    className
  )

  return (
    <Tag 
      className={classes} 
      aria-hidden="false" 
      aria-label="Loading" 
      role="status" 
      {...attributes}
      ref={innerRef}
    />
  )
}

CSpinner.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  grow: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string
};

CSpinner.defaultProps = {
  tag: 'div'
};

export default CSpinner
