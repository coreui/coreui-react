import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CNavTitleProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * A string of all className you want applied to the component.
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

CNavTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CNavTitle.displayName = 'CNavTitle'
