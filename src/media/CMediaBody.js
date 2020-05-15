import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CMediaBody

const CMediaBody = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = classNames(
    'media-body', className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )

}

CMediaBody.propTypes = {
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

export default CMediaBody
