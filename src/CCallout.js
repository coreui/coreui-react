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
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string
}

export default CCallout
