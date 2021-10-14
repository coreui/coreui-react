import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  Colors,
  Shapes,
  TextColors,
  colorPropType,
  shapePropType,
  textColorsPropType,
} from '../Types'

export interface CAvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Select the shape of the component.
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  shape?: Shapes
  /**
   * Size the component small, large, or extra large.
   */
  size?: string
  /**
   * The src attribute for the img element.
   */
  src?: string
  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  status?: Colors
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | 'high-emphasis' | 'medium-emphasis' | 'disabled' | 'high-emphasis-inverse' | 'medium-emphasis-inverse' | 'disabled-inverse' | string
   */
  textColor?: TextColors
}

export const CAvatar = forwardRef<HTMLDivElement, CAvatarProps>(
  ({ children, className, color, shape, size, src, status, textColor, ...rest }, ref) => {
    const _className = classNames(
      'avatar',
      {
        [`bg-${color}`]: color,
        [`avatar-${size}`]: size,
        [`text-${textColor}`]: textColor,
      },
      shape,
      className,
    )
    const statusClassName = status && classNames('avatar-status', `bg-${status}`)

    return (
      <div className={_className} {...rest} ref={ref}>
        {src ? <img src={src} className="avatar-img" /> : children}
        {status && <span className={statusClassName}></span>}
      </div>
    )
  },
)

CAvatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  shape: shapePropType,
  size: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.string,
  textColor: textColorsPropType,
}

CAvatar.displayName = 'CAvatar'
