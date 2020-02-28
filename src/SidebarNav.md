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
  attributes: { target: '_blank', rel: "noreferrer noopener", disabled: false, hidden: false }, // (v2.1.0 up) link html attributes - optional valid JS object with JS API naming
  itemAttr: { id: 'item-1'},    // item html attributes - optional
},
```

- item.icon: string (css class string for <i> tag)
```json5
icon: 'icon-speedometer' // css class string for <i> tag
```
- item.icon: { class, innerText, attributes }  
  (v2.5.7 up alternative icon config object)
```json5
icon: { class: 'material-icons', innerText: 'insert_emoticon', attributes: { title: 'smiley' }} 
```
---

__React Router Link `url`__

`url: string` - a string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.  
`url: object` - (^2.5.4 up) an object that can have any of the following properties.
- `pathname`: a string representing the path to link to.
- `search`: a string representation of query parameters.
- `hash`: a hash to put in the URL, e.g. #a-hash.
- `state`: state to persist to the location. 

`url: function` - (^2.5.4 up) a function to which current location is passed as an argument and which should return location representation as a string or as an object

__React Router Link props to pass in `attributes` object:__  
`replace: bool` - when true, clicking the link will replace the current entry in the history stack instead of adding a new one.  
`innerRef: function` - allows access to the underlying `ref` of the component    
`innerRef: RefObject` - get the underlying `ref` of the component with `React.createRef()`

`others` - you can also pass props you’d like to be on the <a> such as a `title`, `id`, etc.

__React Router NavLink props to pass in `attributes` object:__  
`activeStyle: object` - the styles to apply to the element when it is active.  
`exact: bool` - when true, the active class/style will only be applied if the location is matched exactly.  
`strict: bool` - when true, the trailing slash on a location’s pathname will be taken into consideration when determining if the location matches the current URL.

```json5
{
  name: 'Dashboard',
  url: { 
    pathname: '/dashboard', 
    search: '?name=search&period=today', 
    state: { fromDashboard: true }
  },
  icon: 'icon-speedometer',
  attributes: { 
    replace: true, 
    activeStyle: { textTransform: 'uppercase' }, 
    id: 'link-1', 
    title: 'Dashboard', 
  }
}
```

---

- item with `children` array - works like `nav-dropdown-toggle` with `nav-dropdown-items`
```json5
{
  name: 'Icons',
  url: '/icons',
  icon: 'icon-star',
  class: 'text-uppercase',             // (v2.5.1 up) optional
  attributes: { class: 'bg-success' }, // (v2.5.1 up) nav-dropdown link html attributes - optional valid JS object with JS API naming,
  itemAttr: { id: 'drop-1' },          // (v2.5.3 up) item html attributes - optional
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
To override default behavior of `nav-dropdown toggle` and navigate to `url` use custom `onClick` method:
```json5
{
  name: 'Base',
  url: '/base',
  icon: 'icon-puzzle',
  attributes: {onClick: (e, item)=>{ console.log(e, item) }}, // (v2.5.6 up) optional
  children: []
}
``` 
For active route consistency, you can set redirect on partial routes in `src/routes.js`: 
```js
import { Redirect } from 'react-router-dom';
...
const routes = [
  ...
  { path: '/base', exact: true, name: 'Base', component: () => <Redirect to={'/base/cards'}/> },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  ...
]
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

