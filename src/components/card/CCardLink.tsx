import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

export interface CCardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * The href attribute specifies the URL of the page the link goes to. [docs]
   */
  href?: string
}

export const CCardLink = forwardRef<HTMLAnchorElement, CCardLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-link', className)

    return (
      <CLink className={_className} {...rest} ref={ref}>
        {children}
      </CLink>
    )
  },
)

CCardLink.displayName = 'CCardLink'
