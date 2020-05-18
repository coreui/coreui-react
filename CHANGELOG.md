### [@coreui/react](https://coreui.io/) changelog

##### `v2.5.8`
- chore(demo/polyfill): update to core-js v3

###### dependencies update
- update: `core-js` to `^3.6.5`
- update: `react` to `^16.13.1`
- update: `react-dom` to `^16.13.1`
- update: `react-router-dom` to `^5.2.0`
- update: `mutationobserver-shim` to `^0.3.5`
- update: `eslint` to `^7.0.0`
- update: `eslint-plugin-import` to `^2.20.2`
- update: `eslint-plugin-react` to `^7.20.0`
- update: `nwb` to `^0.24.7`
- update: `react` to `^16.13.1`
- update: `react-dom` to `^16.13.1`
- update: `react-router-dom` to `^5.2.0`
- update: `sinon` to `^9.0.2`

##### `v2.5.7`
- fix(SidebarNav): add missing alternative icon config object

##### `v2.5.6`
- fix(SidebarNav): navigate to route on AppSideBarNav parent menu click - thanx @regimani #98 

###### dependencies update
- update `react` to `^16.13.0`
- update `react-dom` to `^16.13.0`

##### `v2.5.5`
- fix(SidebarNav): perfect scrollbar issue on sidebar minimized / rtl
- chore: dependencies update and config refactor

##### `v2.5.4`
- fix(SidebarNav): allow location object as navConfig item url parameter

##### `v2.5.3`
- fix(SidebarNav): add missing `itemAttr` to item/item with children (optional)
- chore: update demo styles `@coreui/coreui` to `v2.1.12`
 
###### dependencies update
- update `react` to `^16.10.1`
- update `react-dom` to `^16.10.1`
- update `react-router-dom` to `^5.1.2`
- update `babel-eslint` to `^10.0.3`
- update `eslint-plugin-react` to `^7.15.1`
- update `webpack-dev-server` to `^3.8.1`

##### `v2.5.2`
- fix(Switch): does not provide any keyboard accessibility - thanks @roastery-zz close #44
- fix(Switch): checked props and state out of sync - thanks @gravitymedianet @jinixx
- fix(Switch): uncontrolled mode with defaultChecked 

###### dependencies update
- update `core-js` to `^2.6.9`
- update `react-perfect-scrollbar` to `^1.5.3`
- update `reactstrap` to `^8.0.1"
- update `babel-eslint` to `^10.0.2`
- update `enzyme` to `^3.10.0`
- update `enzyme-adapter-react-16` to `^1.14.0`
- update `eslint-plugin-import` to `^2.18.2`
- update `eslint-plugin-react` to `^7.14.3`
- update `react-router-dom` to `^5.0.1`
- update `webpack-dev-server` to `^3.7.2`

##### `v2.5.1`
- fix(SidebarNav): add missing `class` and `attributes` to navDropdown item 
- fix(HeaderDropdown): add missing Dropdown.propTypes
- refactor(demo): AppHeaderDropdown remove style right auto

###### dependencies update
- update `core-js` to `^2.6.8`
- update `enzyme-adapter-react-16` to `^1.13.1`
- update `webpack-dev-server` to `^3.4.1`

##### `v2.5.0`
- BREAKING CHANGE release for use with `react-router-dom v5`
  - feat(Breadcrumb2): mandatory prop `router` :boom: see: [Breadcrumb](./src/Breadcrumb.md)
  - feat(SidebarNav2): mandatory prop `router` :boom: see: [SidebarNav](./src/SidebarNav.md)
- refactor: demo update
- refactor(SidebarNav): rename `options` prop for PerfectScrollbar 

###### dependencies update
- update `react-router-dom` to `^5.0.0` -> moved to `peerDependencies`

__BREAKING CHANGES:__ :boom:
- removed `react-router-dom` from `dependencies`
- deprecate 'Breadcrumb' in favour of `Breadcrumb2`
- deprecate 'SidebarNav' in favour of `SidebarNav2`

usage in `DefaultLayout.js`:
```jsx
import * as router from 'react-router-dom';
import { 
AppBreadcrumb2 as AppBreadcrumb
AppSidebarNav2 as AppSidebarNav
} from '@coreui/react';
// routes config
import routes from '../../routes.js';
```

```html
...
<div className="app-body">
  <AppSidebar fixed display="lg">
    <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
    <AppSidebarMinimizer />
  </AppSidebar>
  <main className="main">
    <AppBreadcrumb appRoutes={routes} router={router}></AppBreadcrumb>
    ...
  </main>
  ...
</div>
...
```

---

##### `v2.1.7`
- maintenance release for use with:
  - react-router `v4.3.x`
  - reactstrap `v7.x`
- update demo styles `@coreui/coreui` to `v2.1.9`
###### dependencies update
- update `react-perfect-scrollbar` to `^1.5.2`
- update `enzyme-adapter-react-16` to `^1.13.0`
- update `eslint` to `^5.16.0`
- update `eslint-plugin-import` to `^2.17.2`
- update `eslint-plugin-react` to `^7.13.0`
- update `react` to `^16.8.6`
- update `react-dom` to `^16.8.6`

##### `v2.1.6`
- fix(LayoutHelper) Multiple arguments for add() & remove() - ie issue 
- fix: lock `react-router-dom` to `~4.3.1`

###### dependencies update
- update `react-router-dom` to `~4.3.1`
- update `enzyme-adapter-react-16` to `^1.11.2`
- update `eslint` to `^5.15.3`
- update `react` to `^16.8.5`
- update `react-dom` to `^16.8.5`

##### `v2.1.5`
- fix: iOS 9 Safari sidebar toggle force issue #61 - thanks @Tubek
- refactor(toggle-classes): keep `force` for the toggle method  
- refactor(layout): drop second parameter for `classList.toggle()`  

###### dependencies update
- update `enzyme-adapter-react-16` to `^1.10.0`
- update `eslint` to `^5.15.1`
- update `react` to `^16.8.3`
- update `react-dom` to `^16.8.3`

##### `v2.1.4`
- fix(Sidebar): *How to set left sidebar is minimized as default* [#145](https://github.com/coreui/coreui-free-react-admin-template/issues/145)
- refactor(Layout): `LayoutHelper` germ
- refactor(Sidebar): use static methods of `LayoutHelper` 
- refactor(SidebarMinimizer): use static methods of `LayoutHelper` 
- chore: update demo css

###### dependencies update
- update `@coreui/coreui` to `^2.1.7`
- update `core-js` to `^2.6.5`
- update `prop-types` to `^15.7.2`
- update `reactstrap` to `^7.1.0`
- update `enzyme` to `^3.9.0`
- update `enzyme-adapter-react-16` to `^1.9.1`
- update `eslint` to `^5.14.1`
- update `eslint-plugin-import` to `^2.16.0`
- update `eslint-plugin-react` to `^7.12.4`
- update `react` to `^16.8.2`
- update `react-dom` to `^16.8.2`

##### `v2.1.3`
- chore: update `@coreui/coreui` to `^2.1.5`
- chore: update `reactstrap` to `^7.0.2`
- chore: update `react-perfect-scrollbar` to `^1.4.4`
- chore: update `react-router-dom` to `^4.3.1`
- chore: update `eslint` to `^5.12.0`
- chore: update `eslint-plugin-react` to `^7.12.3`

##### `v2.1.2`
- refactor: remove `element-closest` dependency issue #37 #50
- chore: update `core-js` to `2.6.1`
- chore: update `enzyme` to `3.8.0`
- chore: update `enzyme-adapter-react-16` to `1.7.1`
- chore: update `eslint` to `5.10.0`
- chore: update `react` to `16.7.0`
- chore: update `react-dom` to `16.7.0`

##### `v2.1.1`
- chore: update `enzyme-adapter-react-16` to `1.7.0`
- chore: update `eslint` to `5.9.0`
- chore: update `react-dom` to `16.6.3`
- chore: update `react` to `16.6.3`

##### `v2.1.0`
- feat(SidebarNav): navLink `attributes` - optional JS object with valid JS API naming:
  - valid attributes: `rel`, `target`, `hidden`, `disabled`, etc...
  - item example:
    ```
    {
    name: 'Try CoreUI PRO',
    url: 'https://coreui.io/pro/react/',
    icon: 'cui-layers icons',
    variant: 'danger',
    attributes: { target: '_blank', rel: "noopener" },
    },
    ```
- update `@coreui/coreui` to `2.1.0` - sidebar-nav-link-disabled-*
- chore: update `react-perfect-scrollbar` to `1.4.2`
- chore: update `eslint` to `5.8.0`
- chore: update `react` to `16.6.0`
- chore: update `react-dom` to `16.6.0`
- chore(demo): style.css update to `@coreui/coreui v2.1.0`, navLink `disabled` example

##### `v2.0.9`
- feat(Sidebar): badge on parent dropdown - thanks @jeff-nz
- fix(SidebarNav): handleClick() target->currentTarget open
- chore(demo): style.css update to `@coreui/coreui v2.0.15`

##### `v2.0.8`
- refactor(SidebarMinimizer): extract `togglePs` method
- refactor(SidebarMinimizer): for use `togglePs` method
- fix(SidebarMinimizer): add `componentDidMount` with `togglePs`
- refactor(AsideToggler): extract `toggle` method
- fix(AsideToggler): add missing `defaultOpen` prop
- fix(Aside): deprecate `hidden` prop in v2 as conflicting with HTML5 `hidden` attribute
- fix(Aside): `displayBreakpoint` behaviour
- update `@coreui/coreui` to `^2.0.14`
- update `reactstrap` to `^6.5.0`
- update `enzyme` to `3.7.0`
- update `enzyme-adapter-react-16` to `1.6.0`

##### `v2.0.7`
- fix(SidebarNav): dirty fix for rtl ps scrollingX issue

##### `v2.0.6`
- update `@coreui/coreui` to `^2.0.12`
- update `@coreui/icons` to `0.3.0`
- update `react-perfect-scrollbar` to `^1.2.2`
- update `reactstrap` to `^6.4.0`
- update `babel-eslint` to `^10.0.1`
- update `enzyme` to `^3.6.0`
- update `enzyme-adapter-react-16` to `^1.5.0`
- update `eslint` to `^5.6.1`
- update `eslint-plugin-import` to `^2.14.0`
- update `eslint-plugin-react` to `^7.11.1`
- update `nwb` to `^0.23.0`
- update `react` to `^16.5.2`
- update `react-dom` to `^16.5.2`
- update `sinon` to `^5.1.1`

##### `v2.0.5`
- feat: hide onclick outside mobile sidebar
- refactor: toggle-classes force
- refactor: Shared/classes.js *Breakpoints
- refactor: element-closest IE polyfill added
- chore: dependencies update

##### `v2.0.4`
- refactor(Breadcrumb): fix for dynamic url like `/path/:id`
- chore: update `prop-types` to `^15.6.2

##### `v2.0.3`
- fix: rollback to @coreui/icons v0.2.0

##### `v2.0.2`
- fix: remove AppLayout export as not production ready
- chore: dependencies update
- fix(Switch): not updating on props change - thanks @IceOnFire

##### `v2.0.1`
- chore: dependencies update

##### `v2.0.0`
- chore: dependencies update
- refactor(demo): `@coreui/icons`

##### `v2.0.0-rc.1`
-fix: minimized sidebar scrollbar issue
