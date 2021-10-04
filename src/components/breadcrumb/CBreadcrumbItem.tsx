import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

export interface CBreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * The `href` attribute for the inner `<CLink>` component.
   */
  href?: string
}

export const CBreadcrumbItem = forwardRef<HTMLLIElement, CBreadcrumbItemProps>(
  ({ children, active, className, href, ...rest }, ref) => {
    const _className = classNames(
      'breadcrumb-item',
      {
        active: active,
      },
      className,
    )
    return (
      <li className={_className} {...(active && { 'aria-current': 'page' })} {...rest} ref={ref}>
        {href ? <CLink href={href}>{children}</CLink> : children}
      </li>
    )
  },
)

CBreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
}

CBreadcrumbItem.displayName = 'CBreadcrumbItem'
