import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CNavProps
  extends HTMLAttributes<HTMLDivElement | HTMLUListElement | HTMLOListElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'ul'
   */
  component?: string | ElementType
  /**
   * Specify a layout type for component. [docs]
   */
  layout?: 'fill' | 'justified'
  /**
   * Set the nav variant to tabs or pills. [docs]
   */
  variant?: 'tabs' | 'pills'
}

export const CNav = forwardRef<HTMLDivElement | HTMLUListElement | HTMLOListElement, CNavProps>(
  ({ children, className, component: Component = 'ul', layout, variant }, ref) => {
    const _className = classNames(
      'nav',
      {
        [`nav-${layout}`]: layout,
        [`nav-${variant}`]: variant,
      },
      className,
    )

    return (
      <Component className={_className} role="navigation" ref={ref}>
        {children}
      </Component>
    )
  },
)

CNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.oneOf(['fill', 'justified']),
  variant: PropTypes.oneOf(['tabs', 'pills']),
}

CNav.displayName = 'CNav'
