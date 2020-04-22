import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'
import CLink from './CLink'

//component - CoreUI / CBadge

const CBadge = props => {

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    shape,
    ...attributes
  } = props

  // render

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    {
      [`badge-${color}`]: color,
      [`badge-${shape}`]: shape
    }
  ), cssModule)

  if (attributes.to || attributes.href) {
    return (
      <CLink {...attributes} className={classes} ref={innerRef} />
    )
  }

  return (
    <Tag className={classes} {...attributes} ref={innerRef} />
  )

}

CBadge.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['', 'pill'])
};

CBadge.defaultProps = {
  tag: 'span'
}

export default CBadge
