import React, { ElementType, forwardRef, MouseEvent, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLinkProps } from '../link/CLink'

import { PolymorphicRefForwardingComponent } from '../../helpers'
import { colorPropType } from '../../props'
import type { Colors, Shapes } from '../../types'

export interface CButtonProps extends Omit<CLinkProps, 'size'> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  as?: ElementType
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * The href attribute specifies the URL of the page the link goes to.
   */
  href?: string
  /**
   * The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.
   */
  role?: string
  /**
   * Select the shape of the component.
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  shape?: Shapes
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Make the button behave as a toggle button. It manages its own active/pressed state, toggling it on click and reflecting it via the `aria-pressed` attribute.
   *
   * @since 5.13.0
   */
  toggle?: boolean
  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Set the button variant to an outlined button or a ghost button.
   */
  variant?: 'outline' | 'ghost'
}

export const CButton: PolymorphicRefForwardingComponent<'button', CButtonProps> = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CButtonProps
>(
  (
    {
      children,
      active,
      as = 'button',
      className,
      color,
      disabled,
      href,
      onClick,
      shape,
      size,
      toggle,
      type = 'button',
      variant,
      ...rest
    },
    ref
  ) => {
    const Component = href ? 'a' : as
    const [_active, setActive] = useState(active)

    useEffect(() => {
      setActive(active)
    }, [active])

    return (
      <Component
        className={classNames(
          'btn',
          {
            [`btn-${variant}-${color}`]: variant && color,
            [`btn-${variant}`]: variant && !color,
            [`btn-${color}`]: !variant && color,
            [`btn-${size}`]: size,
            active: _active,
            disabled,
          },
          shape,
          className
        )}
        {...((Component === 'button' || Component === 'input') && { type, disabled })}
        {...(toggle && { 'aria-pressed': !!_active })}
        {...(Component === 'a' && href && { href })}
        {...(Component === 'a' && disabled && { 'aria-disabled': true, tabIndex: -1 })}
        onClick={(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          if (!disabled) {
            if (toggle) {
              event.preventDefault()
              setActive((prevActive) => !prevActive)
            }

            onClick?.(event)
          }
        }}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  }
)

CButton.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  shape: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  toggle: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['outline', 'ghost']),
}

CButton.displayName = 'CButton'
