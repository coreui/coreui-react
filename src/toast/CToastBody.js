import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CToastBody

const CToastBody = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props

  //render
  const classes = classNames(
    'toast-body', className
  )

  return (
    <div className={classes} {...attributes} ref={innerRef}/>
  )
}

CToastBody.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default CToastBody
