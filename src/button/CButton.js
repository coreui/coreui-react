import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { tagPropType } from '../utils/helper.js'
import CLink from '../link/CLink'
//component - CoreUI / CButton

const CButton = props => {

  let {
    tag: Tag,
    className,
    //
    innerRef,
    onClick,
    disabled,
    active,
    block,
    color,
    size,
    pressed,
    shape,
    variant,
    ...attributes
  } = props

  const click = e => !disabled && onClick && onClick(e)

  const isLink = attributes.to || attributes.href

  //render
  const classes = classNames(
    className,
    'btn',
    variant || color ? `btn${variant ? '-' + variant : ''}-${color}` : false,
    size ? `btn-${size}` : false,
    block ? 'btn-block' : false,
    shape ? `btn-${shape}` : false,
    pressed ? 'btn-pressed' : false,
    { 'active': active && !isLink,
    'disabled': disabled && !isLink }
  )


  if (isLink) {
    return <CLink
      {...attributes}
      active={active}
      disabled={disabled}
      className={classes}
      onClick={click}
      innerRef={innerRef}
    />
  } else {
    return <Tag
      className={classes}
      type="button"
      disabled={disabled}
      {...attributes}
      onClick={click}
      ref={innerRef}
    />
  }
}

CButton.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.string,
  variant: PropTypes.oneOf(['', 'ghost', 'outline']),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  pressed: PropTypes.bool,
}

CButton.defaultProps = {
  tag: 'button'
}

//export
export default CButton
