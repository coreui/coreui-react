import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface COffcanvasTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const COffcanvasTitle = forwardRef<HTMLHeadingElement, COffcanvasTitleProps>(
  ({ children, component: Component = 'h5', className, ...rest }, ref) => {
    return (
      <Component className={classNames('offcanvas-title', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

COffcanvasTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

COffcanvasTitle.displayName = 'COffcanvasTitle'
