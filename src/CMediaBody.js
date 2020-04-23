import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CMediaBody

const CMediaBody = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'media-body', className
  ), cssModule)

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )

}

CMediaBody.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

export default CMediaBody
