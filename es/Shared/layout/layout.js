function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { ToggleClasses } from '../toggle-classes';

var Layout = function () {
  function Layout() {
    _classCallCheck(this, Layout);
  }

  Layout.sidebarToggle = function sidebarToggle() {};

  Layout.sidebarMinimize = function sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
  };

  Layout.mobileSidebarToggle = function mobileSidebarToggle() {
    document.body.classList.toggle('sidebar-mobile-show');
  };

  Layout.sidebarOffCanvasClose = function sidebarOffCanvasClose() {};

  Layout.brandMinimize = function brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  };

  Layout.asideToggleDirective = function asideToggleDirective() {};

  return Layout;
}();

export default Layout;