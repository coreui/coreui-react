import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}
export const CCardSubtitle = forwardRef<HTMLHeadingElement, CCardSubtitleProps>(
  ({ children, component: Component = 'h6', className, ...rest }, ref) => {
    return (
      <Component className={classNames('card-subtitle', className)} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CCardSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CCardSubtitle.displayName = 'CCardSubtitle'
