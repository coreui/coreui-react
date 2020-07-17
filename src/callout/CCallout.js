import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CCallout

const CCallout = props => {

  const {
    className,
    //
    innerRef,
    color,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'c-callout',
    color ? 'c-callout-' + color : null,
    className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef} />
  )

}

CCallout.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string
}

export default CCallout
