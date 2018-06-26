### CoreUI `SidebarNav` subcomponent


prop | default
--- | ---
children | `this.navList(navConfig.items)`
className | `sidebar-nav`
navConfig | `{ items: [ { name url icon badge } ] }`
isOpen | `false`
tag | `nav`

#### `navConfig` structure

- title:
````js
{
  title: true,
  name: 'Theme',
  class: ''              // optional class names space delimited list for title item ex: "text-center"
  wrapper: {             // optional wrapper object
    element: '',         // optional* valid HTML5 element tag ( *required when passing attributes)
    attributes: {}       // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
  },
},
````
- item:
````js
{
  name: 'Dashboard',
  url: '/dashboard',
  icon: `icon-speedometer',
  class: '',                    // optional
  variant: 'success',           // optional
  badge: {
    variant: 'info',
    text: 'NEW',
    class: ''                   // optional
  }
},
````
- item with `children` array - works like `nav-dropdown-toggle` with `nav-dropdown-items`
````js
{
  name: 'Icons',
  url: '/icons',
  icon: 'icon-star',
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
````
- divider:
````js
{
  divider: true
},
````

- order of precedence:
````
title > divider > children > item
````

