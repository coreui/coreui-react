import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface COffcanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const COffcanvasBody = forwardRef<HTMLDivElement, COffcanvasBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('offcanvas-body', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

COffcanvasBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

COffcanvasBody.displayName = 'COffcanvasBody'
