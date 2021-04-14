import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CNavbarNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'ul'
   */
  component?: string | ElementType
}

export const CNavbarNav = forwardRef<HTMLDivElement | HTMLUListElement, CNavbarNavProps>(
  ({ children, component: Component = 'ul', className, ...rest }, ref) => {
    const _className = classNames('navbar-nav', className)

    return (
      <Component className={_className} role="navigation" {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CNavbarNav.displayName = 'CNavbarNav'
