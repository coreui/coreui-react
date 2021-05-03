import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, Shapes } from '../Types'

export interface CAvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string}
   */
  color?: Colors
  /**
   * TODO: add description
   * TODO: change to src like in image?
   */
  image?: any
  /**
   * Select the shape of the component. [docs]
   *
   * @type {'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string}
   */
  shape?: Shapes
  /**
   * Size the component small, large, or extra large. [docs]
   */
  size?: string
  /**
   * Sets the color context of the status indicator to one of CoreUI’s themed colors. [docs]
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string}
   */
  status?: Colors
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors. [docs]
   */
  textColor?: string
}

export const CAvatar = forwardRef<HTMLDivElement, CAvatarProps>(
  ({ children, className, color, image, shape, size, status, textColor, ...rest }, ref) => {
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
        {image ? <img src={image} className="avatar-img" /> : children}
        {status && <span className={statusClassName}></span>}
      </div>
    )
  },
)

CAvatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.any,
  shape: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.string,
  textColor: PropTypes.string,
}

CAvatar.displayName = 'CAvatar'
