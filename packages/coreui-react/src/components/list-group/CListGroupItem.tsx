import React, { ElementType, AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

import { colorPropType } from '../../props'
import type { Colors } from '../../types'

export interface CListGroupItemProps
  extends AnchorHTMLAttributes<HTMLLIElement | HTMLAnchorElement | HTMLButtonElement> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
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
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CListGroupItem = forwardRef<
  HTMLLIElement | HTMLAnchorElement | HTMLButtonElement,
  CListGroupItemProps
>(({ children, active, className, disabled, color, component = 'li', ...rest }, ref) => {
  const Component = component === 'a' || component === 'button' ? CLink : component

  rest = {
    ...((component === 'a' || component === 'button') && {
      active,
      disabled,
      component,
      ref: ref,
    }),
    ...(active && { 'aria-current': true }),
    ...(disabled && { 'aria-disabled': true }),
    ...rest,
  }

  return (
    <Component
      className={classNames(
        'list-group-item',
        {
          [`list-group-item-${color}`]: color,
          'list-group-item-action': component === 'a' || component === 'button',
          active,
          disabled,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
})

CListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
}

CListGroupItem.displayName = 'CListGroupItem'
