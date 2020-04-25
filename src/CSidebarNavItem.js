import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CLink, CBadge } from './index'
import { CIcon } from '@coreui/icons-react'
import { iconProps } from './CSidebarNavDropdown'
//component - CoreUI / CSidebarNavItem

const CSidebarNavItem = props => {

  const {
    children,
    className,
    //
    name,
    icon,
    fontIcon,
    badge,
    addLinkClass,
    label,
    ...rest
  } = props

  //render

  const classes = classNames(
    'c-sidebar-nav-item',
    className
  )

  const linkClasses = classNames(
    label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link',
    addLinkClass
  )

  const routerLinkProps = rest.to && { exact: true, activeClassName: 'c-active'}
  return (
    <li className={classes}>
      { children && children.length ? children : 
        <CLink
          className={linkClasses}
          {...routerLinkProps}
          {...rest}
        >
          { icon && <CIcon {...iconProps(icon)}/>}
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
  className: PropTypes.string,
  //
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontIcon: PropTypes.string,
  badge: PropTypes.object,
  addLinkClass: PropTypes.string,
  label: PropTypes.bool,
  name: PropTypes.string
};

export default CSidebarNavItem
