import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CBreadcrumb

const CBreadcrumb = props => {

  const {
    className,
    innerRef,
    cssModule,
    //
    ...attributes
  } = props

  const classes = mapToCssModules(classNames(className, 'breadcrumb'), cssModule)

  //render
  return (
    <ol className={classes} {...attributes} ref={innerRef}/>
  )
}

CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
}

export default CBreadcrumb