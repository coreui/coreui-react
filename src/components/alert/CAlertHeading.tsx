import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CAlertHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'h4'
   */
  component?: string | ElementType
}

export const CAlertHeading = forwardRef<HTMLHeadingElement, CAlertHeadingProps>(
  ({ children, className, component: Component = 'h4', ...rest }, ref) => {
    const _className = classNames('alert-heading', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CAlertHeading.displayName = 'CAlertHeading'
