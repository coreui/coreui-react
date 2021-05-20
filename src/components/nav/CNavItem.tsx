import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CNavLink, CNavLinkProps } from './CNavLink'

export const CNavItem = forwardRef<HTMLLIElement, CNavLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-item', className)
    if (rest.href || rest.to) {
      children = (
        <CNavLink className={className} {...rest}>
          {children}
        </CNavLink>
      )
    }
    return (
      <li className={_className} ref={ref}>
        {children}
      </li>
    )
  },
)

CNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CNavItem.displayName = 'CNavItem'
