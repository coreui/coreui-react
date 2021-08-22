import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilHouse } from '@coreui/icons'

import pkg from './../../package.json'
import { cilViewQuilt } from '@coreui/icons'
import { cilNotes } from '@coreui/icons'
import { cil3d } from '@coreui/icons'

const version = `/`
// const version = `/${pkg.config.version_short}`

const nav = [
  {
    name: 'Getting Started',
    to: `${version}getting-started/`,
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<rect width="32" height="32" x="144" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="240" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="336" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M312,76.82v34.265a142.419,142.419,0,0,1,86.207,130.708C398.207,320.206,334.413,384,256,384S113.793,320.206,113.793,241.793A142.419,142.419,0,0,1,200,111.085V76.82c-68.671,23.373-118.207,88.5-118.207,164.973C81.793,337.851,159.942,416,256,416s174.207-78.149,174.207-174.207C430.207,165.316,380.671,100.193,312,76.82Z" class="ci-primary"></path><rect width="32" height="229.793" x="240" y="16" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Introduction',
        to: `${version}getting-started/introduction/`,
      },
    ],
  },
  {
    name: 'Layout',
    to: `${version}layout/`,
    icon: (
      <CIcon customClassName="nav-icon text-primary" icon={cilViewQuilt} width={64} height={64} />
    ),
    items: [
      {
        name: 'Breakpoints',
        to: `${version}layout/breakpoints/`,
      },
      {
        name: 'Containers',
        to: `${version}layout/containers/`,
      },
      {
        name: 'Grid',
        to: `${version}layout/grid/`,
      },
      {
        name: 'Columns',
        to: `${version}layout/columns/`,
      },
      {
        name: 'Gutter',
        to: `${version}layout/gutters/`,
      },
    ],
  },
  {
    name: 'Forms',
    to: `${version}forms/`,
    icon: <CIcon customClassName="nav-icon text-primary" icon={cilNotes} width={64} height={64} />,
    items: [
      {
        name: 'Overview',
        to: `${version}forms/overview/`,
      },
      {
        name: 'Form Control',
        to: `${version}forms/form-control/`,
      },
      {
        name: 'Select',
        to: `${version}forms/select/`,
      },
      {
        name: 'Checks & Radios',
        to: `${version}forms/checks-radios/`,
      },
      {
        name: 'Range',
        to: `${version}forms/range/`,
      },
      {
        name: 'Input Group',
        to: `${version}forms/input-group/`,
      },
      {
        name: 'Floating Labels',
        to: `${version}forms/floating-labels/`,
      },
      {
        name: 'Layout',
        to: `${version}forms/layout/`,
      },
      {
        name: 'Validation',
        to: `${version}forms/validation/`,
      },
    ],
  },
  {
    name: 'Components',
    to: `${version}components/`,
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M410.989,16H101.011L16,237.029V496H496V237.029Zm-288,32H240V240H49.143ZM184,272H328v40H184ZM464,464H48V272H152v72H360V272H464ZM272,240V48H389.012l73.845,192Z" class="ci-primary"></path>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Accordion',
        to: `${version}components/accordion/`,
      },
      {
        name: 'Alert',
        to: `${version}components/alert/`,
      },
      {
        name: 'Avatar',
        to: `${version}components/avatar/`,
      },
      {
        name: 'Badge',
        to: `${version}components/badge/`,
      },
      {
        name: 'Breadcrumb',
        to: `${version}components/breadcrumb/`,
      },
      {
        name: 'Button',
        to: `${version}components/button/`,
      },
      {
        name: 'Button Group',
        to: `${version}components/button-group/`,
      },
      {
        name: 'Callout',
        to: `${version}components/callout/`,
      },
      {
        name: 'Card',
        to: `${version}components/card/`,
      },
      {
        name: 'Carousel',
        to: `${version}components/carousel/`,
      },
      {
        name: 'Close Button',
        to: `${version}components/close-button/`,
      },
      {
        name: 'Collapse',
        to: `${version}components/collapse/`,
      },
      {
        name: 'Dropdown',
        to: `${version}components/dropdown/`,
      },
      {
        name: 'Footer',
        to: `${version}components/footer/`,
      },
      {
        name: 'Header',
        to: `${version}components/header/`,
      },
      {
        name: 'Image',
        to: `${version}components/image/`,
      },
      {
        name: 'List Group',
        to: `${version}components/list-group/`,
      },
      {
        name: 'Modal',
        to: `${version}components/modal/`,
      },
      {
        name: 'Navs & Tabs',
        to: `${version}components/navs-tabs/`,
      },
      {
        name: 'Navbar',
        to: `${version}components/navbar/`,
      },
      {
        name: 'Offcanvas',
        to: `${version}components/offcanvas/`,
      },
      {
        name: 'Pagination',
        to: `${version}components/pagination/`,
      },
      {
        name: 'Placeholders',
        to: `${version}components/placeholders/`,
        disabled: true,
        badge: {
          color: 'warning',
          text: 'WIP v4.1',
        }
      },
      {
        name: 'Popover',
        to: `${version}components/popover/`,
      },
      {
        name: 'Progress',
        to: `${version}components/progress/`,
      },
      {
        name: 'Sidebar',
        to: `${version}components/sidebar/`,
      },
      {
        name: 'Table',
        to: `${version}components/table/`,
      },
      {
        name: 'Toast',
        to: `${version}components/toast/`,
      },
      {
        name: 'Tooltip',
        to: `${version}components/tooltip/`,
      },
      {
        name: 'Widgets',
        to: `${version}components/widgets/`,
      },
    ],
  },
  {
    name: 'Migration',
    to: `${version}migration/`,
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M464,256.25C464,370.8,370.8,464,256.25,464S48.5,370.8,48.5,256.25,141.7,48.5,256.25,48.5a208,208,0,0,1,149.963,64H328.5v32h128V16.5h-32V85.478A239.717,239.717,0,1,0,496,256.25Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="272.5 112.451 240.5 112.549 241.017 282.756 353.301 334.53 366.699 305.47 272.954 262.244 272.5 112.451" class="ci-primary"></polygon>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'v4',
        to: `${version}migration/v4/`,
      },
    ],
  },
]

export default nav
