import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CSidebarBrandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CSidebarBrand = forwardRef<HTMLDivElement, CSidebarBrandProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-brand', className)
    return (
      <div className={_className} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

CSidebarBrand.displayName = 'CSidebarBrand'
