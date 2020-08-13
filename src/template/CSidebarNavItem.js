import React, { isValidElement, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CLink, CBadge } from '../index'
import CIcon from '@coreui/icons-react'
import { iconProps } from './CSidebarNavDropdown'

import { DropdownContext } from './CSidebarNavDropdown'

//component - CoreUI / CSidebarNavItem
const CSidebarNavItem = props => {

  const {
    children,
    className,
    //
    innerRef,
    name,
    icon,
    fontIcon,
    badge,
    addLinkClass,
    label,
    color,
    ...rest
  } = props

  const { isOpen } = useContext(DropdownContext)
  const classes = classNames(
    'c-sidebar-nav-item',
    className
  )

  const linkClasses = classNames(
    label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link',
    color && `c-sidebar-nav-link-${color}`,
    addLinkClass
  )

  const routerLinkProps = rest.to && { exact: true, activeClassName: 'c-active' }
  return (
    <li className={classes} ref={innerRef}>
      { children || 
        <CLink
          className={linkClasses}
          {...routerLinkProps}
          {...rest}
          tabIndex={ isOpen === false ? -1 : 0 }
        >
          { icon && (isValidElement(icon) ? icon : <CIcon {...iconProps(icon)}/>) }
          { fontIcon && <i className={`c-sidebar-nav-icon ${fontIcon}`}/>}
          {name}
          { badge && <CBadge {...{...badge, text: null}}>{badge.text}</CBadge>}
        </CLink>
      }
  </li>
  )
}

CSidebarNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontIcon: PropTypes.string,
  badge: PropTypes.object,
  addLinkClass: PropTypes.string,
  label: PropTypes.bool,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string
}

export default CSidebarNavItem
