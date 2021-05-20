import React, { ElementType, forwardRef, ReactNode, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useForkedRef } from '../../utils/hooks'

import { CNavContext } from '../sidebar/CSidebarNav'
import { CLinkProps, CLink } from '../link/CLink'
export interface CNavLinkProps extends Omit<CLinkProps, 'idx'> {
  /**
   * Toggle the active state for the component. [docs]
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'a'
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
  /**
   * TODO:. [docs]
   */
  icon?: string | ReactNode

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
>(({ children, className, icon, idx, ...rest }, ref) => {
  const navLinkRef = useRef<HTMLAnchorElement>(null)
  const forkedRef = useForkedRef(ref, navLinkRef)

  const { setVisibleGroup } = useContext(CNavContext)
  const _className = classNames('nav-link', className)

  useEffect(() => {
    rest.active = navLinkRef.current?.classList.contains('active')
    idx && rest.active && setVisibleGroup(idx)
  }, [rest.active, className])

  return (
    <CLink className={_className} {...rest} ref={forkedRef}>
      {icon && typeof icon === 'string' ? <i className={`nav-icon ${icon}`}></i> : icon}
      {children}
    </CLink>
  )
})

CNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  idx: PropTypes.string,
}

CNavLink.displayName = 'CNavLink'
