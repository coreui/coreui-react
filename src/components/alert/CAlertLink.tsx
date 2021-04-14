import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

export interface CAlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * The href attribute specifies the URL of the page the link goes to. [docs]
   */
  href?: string
  // /**
  //  * A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties. [docs]
  //  */
  // to?: string
}

export const CAlertLink = forwardRef<HTMLAnchorElement, CAlertLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('alert-link', className)

    return (
      <CLink className={_className} {...rest} ref={ref}>
        {children}
      </CLink>
    )
  },
)

CAlertLink.displayName = 'CAlertLink'
