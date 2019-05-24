### CoreUI `SidebarNav` subcomponent
usage in `DefaultLayout`:
```jsx
import * as router from 'react-router-dom';
import { AppSidebarNav2 as AppSidebarNav } from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
```

```html
<AppSidebarNav navConfig={navigation} {...this.props} router={ router }/>
```
props:

prop | default | notes
--- | --- | ---
children | `this.navList(navConfig.items)` |
className | `sidebar-nav` |
navConfig | `{ items: [ { name url icon badge } ] }` |
isOpen | `false` |
tag | `nav` |
router | inject `react-router-dom@5` object | _mandatory for @coreui/react ^2.5.0_  

---
#### `navConfig` shape

- title:
```json5
{
  title: true,
  name: 'Theme',
  class: '',              // optional class names space delimited list for title item ex: "text-center"
  wrapper: {             // optional wrapper object
    element: '',         // optional* valid HTML5 element tag ( *required when passing attributes)
    attributes: {}       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
  },
},
```
- item:
```json5
{
  name: 'Dashboard',
  url: '/dashboard',
  icon: 'icon-speedometer',
  class: '',                    // optional
  variant: 'success',           // optional
  badge: {
    variant: 'info',
    text: 'NEW',
    class: ''                   // optional
  },
  attributes: { target: '_blank', rel: "noreferrer noopener", disabled: false, hidden: false }, // (v2.1.0 up) optional valid JS object with JS API naming
},
```
- item with `children` array - works like `nav-dropdown-toggle` with `nav-dropdown-items`
```json5
{
  name: 'Icons',
  url: '/icons',
  icon: 'icon-star',
  class: 'text-uppercase',             // (v2.5.1 up) optional
  attributes: { class: 'bg-success' }, // (v2.5.1 up) optional valid JS object with JS API naming,
  children: [
    {
      name: 'Flags',     // item options apply
      url: '/icons/flags',
      icon: 'icon-star',
      badge: {
        variant: 'success',
        text: 'NEW'
      }
    },
  ]
}
```
- divider:
```json5
{
  divider: true
},
```

- order of precedence:
```
title > divider > children > item
```

