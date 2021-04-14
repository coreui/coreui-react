import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CNavTitleProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CNavTitle = forwardRef<HTMLLIElement, CNavTitleProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-title', className)
    return (
      <li className={_className} {...rest} ref={ref}>
        {children}
      </li>
    )
  },
)

CNavTitle.displayName = 'CNavTitle'
