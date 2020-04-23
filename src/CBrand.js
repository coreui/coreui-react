import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js';
import CLink from './CLink'

//component - CoreUI / CBrand
const CBrand = props => {

  const {
    tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(className), cssModule)

  const Tag = attributes.to || attributes.href ? CLink : tag
  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  )
}

CBrand.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CBrand.defaultProps = {
  tag: 'div'
};

export default CBrand
