import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CModalFooter = forwardRef<HTMLDivElement, CModalFooterProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('modal-footer', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CModalFooter.displayName = 'CModalFooter'
