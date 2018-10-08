### [@coreui/react](https://coreui.io/) changelog

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
