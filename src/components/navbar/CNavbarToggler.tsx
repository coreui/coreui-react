import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CNavbarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CNavbarToggler = forwardRef<HTMLButtonElement, CNavbarTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('navbar-toggler', className)

    return (
      // TODO: aria-expanded="false"
      <button
        type="button"
        className={_className}
        aria-label="Toggle navigation"
        {...rest}
        ref={ref}
      >
        {children ? children : <span className="navbar-toggler-icon"></span>}
      </button>
    )
  },
)

CNavbarToggler.displayName = 'CNavbarToggler'
