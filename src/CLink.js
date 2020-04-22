import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mapToCssModules } from './Shared/helper.js'
import { NavLink } from 'react-router-dom'

//component - CoreUI / CLink
const CLink = props => {

  const {
    className,
    cssModule,
    //
    innerRef,
    active,
    href,
    onClick,
    ...rest
  } = props

  const to = rest ? rest.to : null
  const click = e => {
    if (!href && !to) {
      e.preventDefault()
    }
    onClick && onClick(e)
  }

  // render

  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : null
  ), cssModule)

  return to ? (
    <NavLink
      {...rest}
      className={classes}
      onClick={click}
      ref={innerRef}
    />
  ) : (
    <a
      href={href || '#'}
      className={classes}
      {...rest}
      onClick={click}
      ref={innerRef}
    />
  )
}

CLink.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  ...NavLink.propTypes,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

CLink.sortAttributes = (attributesToSort) => {
  const attributes = {}
  const linkProps = {}
  Object.entries(attributesToSort || {}).forEach(([key, value]) => {
    if (Object.keys(CLink.propTypes).includes(key)) {
      linkProps[key] = value
    } else {
      attributes[key] = value
    }
  })
  return { linkProps, attributes }
}

export default CLink
