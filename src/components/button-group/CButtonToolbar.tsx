import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CButtonToolbar = forwardRef<HTMLDivElement, CButtonToolbarProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('btn-toolbar', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CButtonToolbar.displayName = 'CButtonToolbar'
