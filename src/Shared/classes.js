export const sidebarCssClasses = [
  'c-sidebar-show',
  'c-sidebar-sm-show',
  'c-sidebar-md-show',
  'c-sidebar-lg-show',
  'c-sidebar-xl-show'
];

export const asideMenuCssClasses = [
  'c-aside-menu-show',
  'c-aside-menu-sm-show',
  'c-aside-menu-md-show',
  'c-aside-menu-lg-show',
  'c-aside-menu-xl-show'
];

export const validBreakpoints = [ 'sm', 'md', 'lg', 'xl' ]

export function checkBreakpoint (breakpoint, list) {
  return list.indexOf(breakpoint) > -1
}
