import React, {
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import type { CNavGroupProps } from '../nav/CNavGroup'
import type { CNavLinkProps } from '../nav/CNavLink'
import type { CNavItemProps } from '../nav/CNavItem'

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
}

const isNavElement = (
  child: ReactNode
): child is ReactElement<CNavGroupProps | CNavLinkProps | CNavItemProps> => {
  if (!React.isValidElement(child)) return false
  const type = child.type as { displayName?: string }
  return (
    type.displayName === 'CNavGroup' ||
    type.displayName === 'CNavLink' ||
    type.displayName === 'CNavItem'
  )
}

const recursiveClone = (children: ReactNode, id?: string, updateId?: boolean): ReactNode => {
  return React.Children.map(children, (child, index) => {
    if (!isNavElement(child)) {
      return child
    }

    const _id = id ? (updateId ? `${id}.${index}` : `${id}`) : `${index}`

    if (child.props.children) {
      const type = child.type as { displayName?: string }
      const shouldUpdateId = type.displayName !== 'CNavItem'

      return React.cloneElement(child, {
        idx: _id,
        children: recursiveClone(child.props.children, _id, shouldUpdateId),
      })
    }

    return React.cloneElement(child, {
      idx: _id,
    })
  })
}

export const CSidebarNav: PolymorphicRefForwardingComponent<'ul', CSidebarNavProps> = forwardRef<
  HTMLUListElement,
  CSidebarNavProps
>(({ children, as: Component = 'ul', className, ...rest }, ref) => {
  const [visibleGroup, setVisibleGroup] = useState('')
  const CNavContextValues = {
    visibleGroup,
    setVisibleGroup,
  }

  return (
    <CSidebarNavContext.Provider value={CNavContextValues}>
      <Component className={classNames('sidebar-nav', className)} ref={ref} {...rest}>
        {recursiveClone(children)}
      </Component>
    </CSidebarNavContext.Provider>
  )
})

CSidebarNav.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
}

CSidebarNav.displayName = 'CSidebarNav'
