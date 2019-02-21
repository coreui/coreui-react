class LayoutHelper {

  static sidebarToggle(toggle) {
    const minimize = arguments.length ? toggle : !document.body.classList.contains('sidebar-minimized');
    this.sidebarMinimize(minimize);
    this.brandMinimize(minimize);
    this.sidebarPSToggle(!minimize);  /*remove PS on sidebar minimized*/
  }

  static sidebarMinimize(force) {
    return document.body.classList.toggle('sidebar-minimized', force);
  }

  static brandMinimize(force) {
    document.body.classList.toggle('brand-minimized', force);
  }

  //  sidebar perfect scrollbar
  static sidebarPSToggle(toggle) {
    const sidebar = document.querySelector('.sidebar-nav');
    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps', 'ps-container', 'ps--active-y');
      } else {
        sidebar.classList.remove('ps', 'ps-container', 'ps--active-y');
      }
    }
  }
}

export default LayoutHelper;
