import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'

//component - CoreUI / CNavbarText

const CNavbarText = props => {

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    ...attributes
  } = props

  //render

  const classes = mapToCssModules(classNames(
    'navbar-text', className
  ), cssModule)

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )
}

CNavbarText.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
};

CNavbarText.defaultProps = {
  tag: 'div'
};

export default CNavbarText
