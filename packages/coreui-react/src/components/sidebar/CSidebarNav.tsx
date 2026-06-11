import React, { ElementType, forwardRef, HTMLAttributes, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CSidebarNavContext } from './CSidebarNavContext'

import { PolymorphicRefForwardingComponent } from '../../helpers'

export interface CSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   *
   * @since 5.0.0
   */
  as?: ElementType
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Make navigation more compact by cutting link padding in half.
   *
   * @since 5.11.0
   */
  compact?: boolean
  /**
   * Sets the navigation variant.
   *
   * @since 5.11.0
   */
  variant?: 'tree'
}

export const CSidebarNav: PolymorphicRefForwardingComponent<'ul', CSidebarNavProps> = forwardRef<
  HTMLUListElement,
  CSidebarNavProps
>(({ children, as: Component = 'ul', className, compact, variant, ...rest }, ref) => {
  const [openChain, setOpenChain] = useState<string[]>([])
  const contextValue = useMemo(() => ({ openChain, setOpenChain }), [openChain])

  return (
    <CSidebarNavContext.Provider value={contextValue}>
      <Component
        className={classNames(
          'sidebar-nav',
          {
            compact,
            'sidebar-nav-tree': variant === 'tree',
          },
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    </CSidebarNavContext.Provider>
  )
})

CSidebarNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  variant: PropTypes.oneOf(['tree']),
}

CSidebarNav.displayName = 'CSidebarNav'
