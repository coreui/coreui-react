import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType, mapToCssModules } from './Shared/helper.js'
import CLink from './CLink'

//component - CoreUI / CBadge

const CBadge = props => {

  let {
    tag,
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

  const Tag = attributes.to || attributes.href ? CLink : tag
  const ref = { [`${typeof Tag === 'string' ? 'ref': 'innerRef'}`]: innerRef }

  return (
    <Tag className={classes} {...attributes} {...ref} />
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
}

CBadge.defaultProps = {
  tag: 'span'
}

export default CBadge
