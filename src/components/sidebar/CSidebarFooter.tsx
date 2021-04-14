import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CSidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CSidebarFooter = forwardRef<HTMLDivElement, CSidebarFooterProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-footer', className)
    return (
      <div className={_className} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

CSidebarFooter.displayName = 'CSidebarFooter'
