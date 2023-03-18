import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { colorPropType, shapePropType, textColorsPropType } from '../../props'
import type { Colors, Shapes, TextColors } from '../../types'

export interface CBadgeProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
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
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Position badge in one of the corners of a link or button.
   */
  position?: 'top-start' | 'top-end' | 'bottom-end' | 'bottom-start'
  /**
   * Select the shape of the component.
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  shape?: Shapes
  /**
   * Size the component small.
   */
  size?: 'sm'
  /**
   * Sets the text color of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | 'high-emphasis' | 'medium-emphasis' | 'disabled' | 'high-emphasis-inverse' | 'medium-emphasis-inverse' | 'disabled-inverse' | string
   */
  textColor?: TextColors
}
export const CBadge = forwardRef<HTMLDivElement | HTMLSpanElement, CBadgeProps>(
  (
    {
      children,
      className,
      color,
      component: Component = 'span',
      position,
      shape,
      size,
      textColor,
      ...rest
    },
    ref,
  ) => {
    return (
      <Component
        className={classNames(
          'badge',
          {
            [`bg-${color}`]: color,
            'position-absolute translate-middle': position,
            'top-0': position?.includes('top'),
            'top-100': position?.includes('bottom'),
            'start-100': position?.includes('end'),
            'start-0': position?.includes('start'),
            [`badge-${size}`]: size,
            [`text-${textColor}`]: textColor,
          },
          shape,
          className,
        )}
        {...rest}
        ref={ref}
      >
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
  position: PropTypes.oneOf(['top-start', 'top-end', 'bottom-end', 'bottom-start']),
  shape: shapePropType,
  size: PropTypes.oneOf(['sm']),
  textColor: textColorsPropType,
}

CBadge.displayName = 'CBadge'
