import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

//component - CoreUI / CBreadcrumb

const CBreadcrumb = props => {

  const {
    className,
    innerRef,
    //
    ...attributes
  } = props

  const classes = classNames(className, 'breadcrumb')

  //render
  return (
    <ol className={classes} {...attributes} ref={innerRef}/>
  )
}

CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default CBreadcrumb