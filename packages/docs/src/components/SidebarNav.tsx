import React, { ReactNode } from 'react'
import { Link } from 'gatsby'

import { CBadge, CNavGroup, CNavItem, CNavLink, CSidebarNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  to: string
  items?: NavItem[]
}

interface SidebarNavProps {
  items: NavItem[]
}

export const SidebarNav = ({ items }: SidebarNavProps) => {
  const navLink = (name: string | JSX.Element, icon: string | ReactNode, badge?: Badge) => {
    return (
      <>
        {icon && typeof icon === 'string' ? <CIcon name={icon} customClassName="nav-icon" /> : icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item: NavItem, index: number) => {
    const { name, badge, icon, ...rest } = item
    return (
      <CNavItem key={index}>
        <CNavLink as={Link} activeClassName="active" partiallyActive {...rest}>
          {navLink(name, icon, badge)}
        </CNavLink>
      </CNavItem>
    )
  }

  const navGroup = (item: NavItem, index: number) => {
    const { name, icon, items } = item
    return (
      <CNavGroup compact toggler={navLink(name, icon)} key={index}>
        {items?.map((item: NavItem, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </CNavGroup>
    )
  }

  return (
    <CSidebarNav>
      {items &&
        items.map((item: NavItem, index: number) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
    </CSidebarNav>
  )
}
