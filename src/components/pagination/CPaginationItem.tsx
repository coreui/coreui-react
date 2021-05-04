import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

export interface CPaginationItemProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * Define a string that labels the current element. Use it in cases where a text label is not visible on the screen. [docs]
   */
  ariaLabel?: string
  /**
   * Toggle the active state for the component. [docs]
   */
  active?: boolean
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
}

export const CPaginationItem = forwardRef<HTMLAnchorElement, CPaginationItemProps>(
  ({ children, className, component, ...rest }, ref) => {
    const _className = classNames(
      'page-item',
      {
        active: rest.active,
        disabled: rest.disabled,
      },
      className,
    )

    const Component = component ? component : rest.active ? 'span' : 'a'

    return (
      <li className={_className} {...(rest.active && { 'aria-current': 'page' })}>
        {Component === 'a' ? (
          <CLink className="page-link" component={Component} {...rest} ref={ref}>
            {children}
          </CLink>
        ) : (
          <Component className="page-link" ref={ref}>
            {children}
          </Component>
        )}
      </li>
    )
  },
)

CPaginationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CPaginationItem.displayName = 'CPaginationItem'
