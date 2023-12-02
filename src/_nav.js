import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilWallet,
  cilMemory,
  cilMagnifyingGlass,
  cilMonitor,
  cilCog
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle, CNavLink } from '@coreui/react'

const _nav = [
   {
    component: CNavTitle,
    name: "Account"
  },
  {
    component: CNavTitle,
    name: 'Current Deployment',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Coretime Credits',
    to: '/coretime',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Runtime Upgrades',
    to: '/runtime-upgrade',
    icon: <CIcon icon={cilMemory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Explorer',
    to: 'https://google.com',
    icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
  },
  {
    component: CNavLink,
    name: 'Grafana',
    href: 'https://google.com',
    icon: <CIcon icon={cilMonitor} customClassName="nav-icon" />,
  },
  //  TODO -> There could be some logic here to show one or the other menu depending on if there's an active deployment
  // {
  //   component: CNavTitle,
  //   name: 'New Deployment',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Configuration',
  //   to: '/configure',
  //   icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Runtime',
  //       to: '/configure/runtime',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collators',
  //       to: '/configure/collators',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Coretime',
  //       to: '/configure/coretime',
  //     },
  //   ],
  // },
]

export default _nav
