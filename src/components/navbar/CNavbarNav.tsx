import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CNavbarNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
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

CNavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CNavbarNav.displayName = 'CNavbarNav'
