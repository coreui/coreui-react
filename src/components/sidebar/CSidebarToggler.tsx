import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CSidebarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const CSidebarToggler = forwardRef<HTMLButtonElement, CSidebarTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-toggler', className)
    return (
      <button className={_className} ref={ref} {...rest}>
        {children}
      </button>
    )
  },
)

CSidebarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CSidebarToggler.displayName = 'CSidebarToggler'
