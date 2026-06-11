import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLinkProps, CLink } from '../link/CLink'
import { CNavGroupContext } from './CNavGroupContext'
import { CSidebarNavContext } from '../sidebar/CSidebarNavContext'

import { PolymorphicRefForwardingComponent } from '../../helpers'
import { useForkedRef } from '../../hooks'

export interface CNavLinkProps extends CLinkProps {
  /**
   * @ignore
   */
  to?: string
}

export const CNavLink: PolymorphicRefForwardingComponent<'a', CNavLinkProps> = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CNavLinkProps
>(({ children, className, ...rest }, ref) => {
  const navLinkRef = useRef<HTMLAnchorElement>(null)
  const forkedRef = useForkedRef(ref, navLinkRef)

  const parentChain = useContext(CNavGroupContext)
  const setOpenChain = useContext(CSidebarNavContext)?.setOpenChain

  useEffect(() => {
    const element = navLinkRef.current

    if (!element || !setOpenChain || parentChain.length === 0) {
      return
    }

    let wasActive = false
    const sync = () => {
      const active = element.classList.contains('active')
      if (active && !wasActive) {
        setOpenChain(parentChain)
      }

      wasActive = active
    }

    sync()
    const observer = new MutationObserver(sync)
    observer.observe(element, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [parentChain, setOpenChain])

  return (
    <CLink className={classNames('nav-link', className)} {...rest} ref={forkedRef}>
      {children}
    </CLink>
  )
})

CNavLink.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

CNavLink.displayName = 'CNavLink'
