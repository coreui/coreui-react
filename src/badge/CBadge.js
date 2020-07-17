import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import CLink from '../link/CLink'

//component - CoreUI / CBadge

const CBadge = props => {

  let {
    tag,
    className,
    //
    innerRef,
    color,
    shape,
    ...attributes
  } = props

  // render

  const classes = classNames(
    className,
    'badge',
    {
      [`badge-${color}`]: color,
      [`badge-${shape}`]: shape
    }
  )

  const Tag = attributes.to || attributes.href ? CLink : tag
  const ref = { [`${typeof Tag === 'string' ? 'ref': 'innerRef'}`]: innerRef }

  return (
    <Tag className={classes} {...attributes} {...ref} />
  )

}

CBadge.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  color: PropTypes.string,
  shape: PropTypes.oneOf(['', 'pill'])
};

CBadge.defaultProps = {
  tag: 'span'
}

export default CBadge
