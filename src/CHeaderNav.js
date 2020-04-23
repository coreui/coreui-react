import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CHeaderNav

const CHeaderNav = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav'
  ), cssModule)

  return (
    <ul className={classes} {...attributes} ref={innerRef} />
  )

}

CHeaderNav.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};


export default CHeaderNav
