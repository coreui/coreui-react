import React from 'react'
import CIcon from '@coreui/icons-react'

const nav = [
  {
    name: 'Getting Started',
    to: '/getting-started/',
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
        to: '/getting-started/introduction/',
      },
    ],
  },
  {
    name: 'Layout',
    to: '/layout/',
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z" class="ci-primary"></path>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Breakpoints',
        to: '/layout/breakpoints/',
      },
      {
        name: 'Containers',
        to: '/layout/containers/',
      },
      {
        name: 'Grid',
        to: '/layout/grid/',
      },
      {
        name: 'Columns',
        to: '/layout/columns/',
      },
      {
        name: 'Gutter',
        to: '/layout/gutters/',
      },
    ],
  },
  {
    name: 'Forms',
    to: '/forms/',
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<rect width="288" height="32" x="112" y="152" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="288" height="32" x="112" y="240" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="152" height="32" x="112" y="328" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M480,48H32V464H480ZM448,432H64V80H448Z" class="ci-primary"></path>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      // {
      //   name: 'Overview',
      //   to: '/forms/overview/',
      // },
      {
        name: 'Checkbox',
        to: '/forms/checkbox/',
      },
      {
        name: 'Input',
        to: '/forms/input/',
      },
      {
        name: 'Input Group',
        to: '/forms/input-group/',
      },
      {
        name: 'Radio',
        to: '/forms/radio/',
      },
      {
        name: 'Range',
        to: '/forms/range/',
      },
      {
        name: 'Select',
        to: '/forms/select/',
      },
      {
        name: 'Switch',
        to: '/forms/switch/',
      },
      {
        name: 'Textarea',
        to: '/forms/textarea/',
      },
      // {
      //   name: 'Form Control',
      //   to: '/forms/form-control/',
      // },
      // {
      //   name: 'Checks & Radios',
      //   to: '/forms/checks-radios/',
      // },
      {
        name: 'Floating Labels',
        to: '/forms/floating-labels/',
      },
      {
        name: 'Layout',
        to: '/forms/layout/',
      },
      {
        name: 'Validation',
        to: '/forms/validation/',
      },
    ],
  },
  {
    name: 'Components',
    to: '/components/',
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
        to: '/components/accordion/',
      },
      {
        name: 'Alert',
        to: '/components/alert/',
      },
      {
        name: 'Avatar',
        to: '/components/avatar/',
      },
      {
        name: 'Badge',
        to: '/components/badge/',
      },
      {
        name: 'Breadcrumb',
        to: '/components/breadcrumb/',
      },
      {
        name: 'Button',
        to: '/components/button/',
      },
      {
        name: 'Button Group',
        to: '/components/button-group/',
      },
      {
        name: 'Callout',
        to: '/components/callout/',
      },
      {
        name: 'Card',
        to: '/components/card/',
      },
      {
        name: 'Carousel',
        to: '/components/carousel/',
      },
      {
        name: 'Chart',
        to: '/components/chart/',
      },
      {
        name: 'Close Button',
        to: '/components/close-button/',
      },
      {
        name: 'Collapse',
        to: '/components/collapse/',
      },
      {
        name: 'Dropdown',
        to: '/components/dropdown/',
      },
      {
        name: 'Footer',
        to: '/components/footer/',
      },
      {
        name: 'Header',
        to: '/components/header/',
      },
      {
        name: 'Icon',
        to: '/components/icon/',
      },
      {
        name: 'Image',
        to: '/components/image/',
      },
      {
        name: 'List Group',
        to: '/components/list-group/',
      },
      {
        name: 'Modal',
        to: '/components/modal/',
      },
      {
        name: 'Navs & Tabs',
        to: '/components/navs-tabs/',
      },
      {
        name: 'Navbar',
        to: '/components/navbar/',
      },
      {
        name: 'Offcanvas',
        to: '/components/offcanvas/',
      },
      {
        name: 'Pagination',
        to: '/components/pagination/',
      },
      {
        name: 'Placeholder',
        to: '/components/placeholder/',
      },
      {
        name: 'Popover',
        to: '/components/popover/',
      },
      {
        name: 'Progress',
        to: '/components/progress/',
      },
      {
        name: 'Sidebar',
        to: '/components/sidebar/',
      },
      {
        name: 'Spinner',
        to: '/components/spinner/',
      },
      {
        name: 'Table',
        to: '/components/table/',
      },
      {
        name: 'Toast',
        to: '/components/toast/',
      },
      {
        name: 'Tooltip',
        to: '/components/tooltip/',
      },
      {
        name: 'Widgets',
        to: '/components/widgets/',
      },
    ],
  },
  {
    name: 'Migration',
    to: '/migration/',
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
        to: '/migration/v4/',
      },
    ],
  },
]

export default nav
