import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CNavLink, CNavLinkProps } from './CNavLink'

export const CNavItem = forwardRef<HTMLLIElement, CNavLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <li className={classNames('nav-item', className)} ref={ref}>
        {rest.href || rest.to ? (
          <CNavLink className={className} {...rest}>
            {children}
          </CNavLink>
        ) : (
          children
        )}
      </li>
    )
  },
)

CNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CNavItem.displayName = 'CNavItem'
