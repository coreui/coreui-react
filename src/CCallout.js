import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CCallout

const CCallout = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    color,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'c-callout',
    color ? 'c-callout-' + color : null,
    className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef} />
  )

}

CCallout.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string
}

export default CCallout
