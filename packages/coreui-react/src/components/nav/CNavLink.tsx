import React, { ElementType, forwardRef, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLinkProps, CLink } from '../link/CLink'
import { CNavContext } from '../sidebar/CSidebarNav'

import { useForkedRef } from '../../hooks'

export interface CNavLinkProps extends Omit<CLinkProps, 'idx'> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * @ignore
   */
  idx?: string
  /**
   * @ignore
   */
  to?: string
}

export const CNavLink = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLLIElement,
  CNavLinkProps
>(({ children, className, idx, ...rest }, ref) => {
  const navLinkRef = useRef<HTMLAnchorElement>(null)
  const forkedRef = useForkedRef(ref, navLinkRef)

  const { setVisibleGroup } = useContext(CNavContext)

  useEffect(() => {
    rest.active = navLinkRef.current?.classList.contains('active')
    idx && rest.active && setVisibleGroup(idx)
  }, [rest.active, className])

  return (
    <CLink className={classNames('nav-link', className)} {...rest} ref={forkedRef}>
      {children}
    </CLink>
  )
})

CNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  idx: PropTypes.string,
}

CNavLink.displayName = 'CNavLink'
