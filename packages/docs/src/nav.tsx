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
      {
        name: 'Accessibility',
        to: '/getting-started/accessibility/',
      },
    ],
  },
  {
    name: 'Customize',
    to: '/customize/',
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M425.514,82.055C380.778,39.458,320.673,16,256.271,16,196.248,16,136.415,36.073,92.115,71.071,43.032,109.85,16,164.161,16,224c0,60.1,15.531,98.87,48.876,122.019,28,19.438,68.412,27.731,135.124,27.731h29.75A26.28,26.28,0,0,1,256,400v47.984a32,32,0,0,0,32,32h.032l90.755-.088a32.094,32.094,0,0,0,19.686-6.8c9.725-7.622,34.727-29.4,56.8-66.9C482.3,360.262,496,307.037,496,248,496,184.268,470.968,125.334,425.514,82.055Zm2.173,307.915c-19.3,32.792-40.663,51.447-48.932,57.926L288,447.984V400a58.316,58.316,0,0,0-58.25-58.25H200c-59.69,0-94.644-6.585-116.876-22.019C58.833,302.869,48,273.344,48,224,48,113.833,153.9,48,256.271,48,372.755,48,464,135.851,464,248,464,301.253,451.782,349.019,427.687,389.97Z" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M128,144a56,56,0,1,0,56,56A56.064,56.064,0,0,0,128,144Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,128,224Z" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M240,72a56,56,0,1,0,56,56A56.064,56.064,0,0,0,240,72Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,240,152Z" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M360,128a56,56,0,1,0,56,56A56.064,56.064,0,0,0,360,128Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,360,208Z" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M376,264a56,56,0,1,0,56,56A56.064,56.064,0,0,0,376,264Zm0,80a24,24,0,1,1,24-24A24.027,24.027,0,0,1,376,344Z" class="ci-primary"/>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Sass',
        to: '/customize/sass/',
      },
      {
        name: 'Options',
        to: '/customize/options/',
      },
      {
        name: 'CSS Variables',
        to: '/customize/css-variables/',
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
        name: 'Gutters',
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
      {
        name: 'Checkbox',
        to: '/forms/checkbox/',
      },
      {
        name: 'Input',
        to: '/forms/input/',
      },
      {
        name: 'Input Mask',
        to: '/forms/input-mask/',
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
        name: 'Navbar',
        to: '/components/navbar/',
      },
      {
        name: 'Navs & Tabs',
        to: '/components/navs-tabs/',
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
    name: 'Templates',
    to: '/templates/',
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M472,232H424V120a24.028,24.028,0,0,0-24-24H40a24.028,24.028,0,0,0-24,24V366a24.028,24.028,0,0,0,24,24H212v50H152v32H304V440H244V390h92v58a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V256A24.027,24.027,0,0,0,472,232ZM336,256V358H48V128H392V232H360A24.027,24.027,0,0,0,336,256ZM464,440H368V264h96Z" class="ci-primary"/>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Admin & Dashboard',
        to: '/templates/admin-dashboard/',
        badge: {
          color: 'success',
          text: 'New',
        },
      },
      {
        name: 'Download',
        to: '/templates/download/',
      },
      {
        name: 'Installation',
        to: '/templates/installation/',
      },
      {
        name: 'Customize',
        to: '/templates/customize/',
      },
      {
        name: 'Contents',
        to: '/templates/contents/',
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
