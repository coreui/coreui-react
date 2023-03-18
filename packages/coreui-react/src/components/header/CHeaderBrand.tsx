import React, { ElementType, forwardRef, AnchorHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CHeaderBrandProps
  extends AnchorHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CHeaderBrand = forwardRef<HTMLAnchorElement | HTMLSpanElement, CHeaderBrandProps>(
  ({ children, component: Component = 'a', className, ...rest }, ref) => {
    return (
      <Component className={classNames('header-brand', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CHeaderBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CHeaderBrand.displayName = 'CHeaderBrand'
