import PropTypes from 'prop-types'
import React, { FC, ElementType, useMemo } from 'react'
import { CNavGroup } from '../nav/CNavGroup'
import { CNavGroupItems } from '../nav/CNavGroupItems'
import { CNavItem } from '../nav/CNavItem'
import { CNavLink } from '../nav/CNavLink'
import { CNavTitle } from '../nav/CNavTitle'

export interface CSidebarNavItemGeneratorProps {
  anchor: string
  as: string | ElementType
  _component: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  items?: Array<object>
  idx?: string
}

interface CCreateNavItemProps {
  idx?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  items: Array<object>
}

export const CCreateNavItem: FC<CCreateNavItemProps> = ({ items, idx }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItem = (item: any, index: number, idx?: string) => {
    const { _component, as, anchor, items, ...rest }: CSidebarNavItemGeneratorProps = item
    const components = { CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle }

    const Component = components[_component] || _component

    const children = items ? items.map((item, index) => renderItem(item, index)) : anchor

    return (
      <Component
        component={as}
        key={index}
        {...(items && { idx: `${idx}.${index}`, toggler: anchor })}
        {...rest}
      >
        {children}
      </Component>
    )
  }

  const generatedItems = useMemo(() => {
    return items && items.map((item, index) => renderItem(item, index, idx))
  }, [JSON.stringify(items)])

  return <React.Fragment>{generatedItems}</React.Fragment>
}

CCreateNavItem.propTypes = {
  idx: PropTypes.any,
  items: PropTypes.any, // TODO: find better solution
}
