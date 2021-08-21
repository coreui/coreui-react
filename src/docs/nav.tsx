import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHouse } from '@coreui/icons'

import pkg from './../../package.json'
import { cilViewQuilt } from '@coreui/icons'
import { cilNotes } from '@coreui/icons'
import { cil3d } from '@coreui/icons'

const version = pkg.config.version_short

const nav = [
  {
    name: 'Getting Started',
    to: `/${version}/getting-started/`,
    icon: <CIcon customClassName="nav-icon text-primary" icon={cilHouse} width={64} height={64} />,
    items: [
      {
        name: 'Introduction',
        to: `/${version}/getting-started/introduction`,
      },
    ],
  },
  {
    name: 'Layout',
    to: `/${version}/layout/`,
    icon: (
      <CIcon customClassName="nav-icon text-primary" icon={cilViewQuilt} width={64} height={64} />
    ),
    items: [
      {
        name: 'Breakpoints',
        to: `/${version}/layout/breakpoints`,
      },
      {
        name: 'Containers',
        to: `/${version}/layout/containers`,
      },
      {
        name: 'Grid',
        to: `/${version}/layout/grid`,
      },
      {
        name: 'Columns',
        to: `/${version}/layout/columns`,
      },
      {
        name: 'Gutter',
        to: `/${version}/layout/gutters`,
      },
    ],
  },
  {
    name: 'Forms',
    to: `/${version}/forms/`,
    icon: <CIcon customClassName="nav-icon text-primary" icon={cilNotes} width={64} height={64} />,
    items: [
      {
        name: 'Overview',
        to: `/${version}/forms/overview`,
      },
      {
        name: 'Form Control',
        to: `/${version}/forms/form-control`,
      },
      {
        name: 'Select',
        to: `/${version}/forms/select`,
      },
      {
        name: 'Checks & Radios',
        to: `/${version}/forms/checks-radios`,
      },
      {
        name: 'Range',
        to: `/${version}/forms/range`,
      },
      {
        name: 'Input Group',
        to: `/${version}/forms/input-group`,
      },
      {
        name: 'Floating Labels',
        to: `/${version}/forms/floating-labels`,
      },
      {
        name: 'Layout',
        to: `/${version}/forms/layout`,
      },
      {
        name: 'Validation',
        to: `/${version}/forms/validation`,
      },
    ],
  },
  {
    name: 'Components',
    to: `/${version}/components/`,
    icon: <CIcon customClassName="nav-icon text-primary" icon={cil3d} width={64} height={64} />,
    items: [
      {
        name: 'Accordion',
        to: `/${version}/components/accordion`,
      },
      {
        name: 'Alert',
        to: `/${version}/components/alert`,
      },
      {
        name: 'Avatar',
        to: `/${version}/components/avatar`,
      },
      {
        name: 'Badge',
        to: `/${version}/components/badge`,
      },
      {
        name: 'Breadcrumb',
        to: `/${version}/components/breadcrumb`,
      },
      {
        name: 'Button',
        to: `/${version}/components/button`,
      },
      {
        name: 'Button Group',
        to: `/${version}/components/button-group`,
      },
      {
        name: 'Callout',
        to: `/${version}/components/callout`,
      },
      {
        name: 'Card',
        to: `/${version}/components/card`,
      },
      {
        name: 'Carousel',
        to: `/${version}/components/carousel`,
      },
      {
        name: 'Close Button',
        to: `/${version}/components/close-button`,
      },
      {
        name: 'Collapse',
        to: `/${version}/components/collapse`,
      },
      {
        name: 'Dropdown',
        to: `/${version}/components/dropdown`,
      },
      {
        name: 'Footer',
        to: `/${version}/components/footer`,
      },
      {
        name: 'Header',
        to: `/${version}/components/header`,
      },
      {
        name: 'Image',
        to: `/${version}/components/image`,
      },
      {
        name: 'List Group',
        to: `/${version}/components/list-group`,
      },
      {
        name: 'Modal',
        to: `/${version}/components/modal`,
      },
      {
        name: 'Nav',
        to: `/${version}/components/nav`,
      },
      {
        name: 'Navbar',
        to: `/${version}/components/navbar`,
      },
      {
        name: 'Offcanvas',
        to: `/${version}/components/offcanvas`,
      },
      {
        name: 'Pagination',
        to: `/${version}/components/pagination`,
      },
      {
        name: 'Popover',
        to: `/${version}/components/popover`,
      },
      {
        name: 'Progress',
        to: `/${version}/components/progress`,
      },
      {
        name: 'Sidebar',
        to: `/${version}/components/sidebar`,
      },
      {
        name: 'Table',
        to: `/${version}/components/table`,
      },
      {
        name: 'Toast',
        to: `/${version}/components/toast`,
      },
      {
        name: 'Tooltip',
        to: `/${version}/components/tooltip`,
      },
      {
        name: 'Widgets',
        to: `/${version}/components/widgets`,
      },
    ],
  },
]

export default nav
