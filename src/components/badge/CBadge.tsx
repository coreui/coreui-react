import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, Shapes, colorPropType, shapePropType } from '../Types'

export interface CBadgeProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
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
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'span'
   */
  component?: string | ElementType
  /**
   * Select the shape of the component. [docs]
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  shape?: Shapes
  /**
   * Size the component small. [docs]
   *
   * @type 'sm'
   */
  size?: 'sm'
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors. [docs]
   */
  textColor?: string
}
export const CBadge = forwardRef<HTMLDivElement | HTMLSpanElement, CBadgeProps>(
  (
    { children, className, color, component: Component = 'span', shape, size, textColor, ...rest },
    ref,
  ) => {
    const _className = classNames(
      'badge',
      {
        [`bg-${color}`]: color,
        [`text-${textColor}`]: color,
        [`badge-${size}`]: size,
      },
      shape,
      className,
    )

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CBadge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  shape: shapePropType,
  size: PropTypes.oneOf(['sm']),
  textColor: PropTypes.string,
}

CBadge.displayName = 'CBadge'
