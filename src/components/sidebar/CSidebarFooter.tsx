import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CSidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
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

CSidebarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CSidebarFooter.displayName = 'CSidebarFooter'
