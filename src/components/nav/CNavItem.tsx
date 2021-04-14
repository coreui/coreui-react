import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { CNavLink, CNavLinkProps } from './CNavLink'

export const CNavItem = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLLIElement,
  CNavLinkProps
>(({ children, className, ...rest }, ref) => {
  const _className = classNames('nav-item', className)
  if (rest.href || rest.to) {
    children = (
      <CNavLink className={className} {...rest} ref={ref}>
        {children}
      </CNavLink>
    )
  }
  return (
    // @ts-expect-error
    <li className={_className} ref={ref}>
      {children}
    </li>
  )
})

CNavItem.displayName = 'CNavItem'
