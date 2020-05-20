import React, { useState, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CIconRaw } from '@coreui/icons-react'
import { useLocation } from 'react-router-dom'

import { Context } from './CSidebar'

export const iconProps = (icon) => {
  if (typeof icon === 'object') {
    const key = icon.size ? 'className' : 'customClasses'
    return {
      ...icon,
      [`${key}`]: icon.customClasses || `c-sidebar-nav-icon ${icon.className}`
    }
  } else {
    return {
      customClasses: 'c-sidebar-nav-icon',
      name: icon
    }
  }
}

//component - CoreUI / CSidebarNavDropdown

const CSidebarNavDropdown = props => {

  const {
    children,
    className,
    //
    innerRef,
    icon,
    fontIcon,
    name,
    show,
    route,
    ...attributes
  } = props

  const [isOpen, setIsOpen] = useState(show)
  useMemo(() => {
    setIsOpen(show)
  }, [show])

  const { dropdownMode } = useContext(Context)

  let path = ''
  try {
    path = useLocation().pathname
  } catch (e) {}

  useMemo(()=>{
    if (dropdownMode === 'close') {
      setIsOpen(false)
    } else if (dropdownMode === 'closeInactive' && route) {
      setIsOpen(path.includes(route))
    } else if (dropdownMode !== 'noAction' && !isOpen && route) {
      setIsOpen(path.includes(route))
    }
  }, [path])


  //render

  const classes = classNames(
    'c-sidebar-nav-dropdown',
    isOpen && 'c-show',
    className
  )
      
  const iconClasses = classNames(
    'c-sidebar-nav-icon',
    fontIcon
  )

  return (
    <li className={classes} {...attributes} ref={innerRef}>
      <a className="c-sidebar-nav-dropdown-toggle" onClick={() => setIsOpen(!isOpen)} >
        { icon && <CIconRaw {...iconProps(icon)} /> }
        { fontIcon && <i className={iconClasses}/> }
        { name }
      </a>
      <ul className="c-sidebar-nav-dropdown-items">
        {children}
      </ul>
    </li>
  )
}

CSidebarNavDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  name: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fontIcon: PropTypes.string,
  show: PropTypes.bool,
  route: PropTypes.string
};


export default CSidebarNavDropdown
