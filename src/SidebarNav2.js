import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../css/scrollbar.css';

import LayoutHelper from './Shared/layout/layout'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  navConfig: PropTypes.any,
  navFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  isOpen: PropTypes.bool,
  staticContext: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  router: PropTypes.any,
  props: PropTypes.any
};

const defaultProps = {
  tag: 'nav',
  navConfig: {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: { variant: 'info', text: 'NEW' }
      }]
  },
  isOpen: false,
  router: {RsNavLink}
};

class AppSidebarNav2 extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.hideMobile = this.hideMobile.bind(this);

    this.changes = null;
    this.state = { sidebarMinimized: false }
  }

  _scrollBarRef = null;

  handleClick(e, item) {
    if (item.attributes && typeof item.attributes.onClick  === 'function' && !this.isActiveRoute(item.url, this.props)) {
      item.attributes.onClick(e, item)
    } else {
      e.preventDefault();
    }
    e.currentTarget.parentElement.classList.toggle('open');
  }

  isActiveRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1
  }

  activeRoute(routeName, props) {
    return this.isActiveRoute(routeName, props) ?
      'nav-item nav-dropdown open' :
      'nav-item nav-dropdown';
  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  }

  getAttribs(attributes) {
    return {...attributes};
  }

  // nav list
  navList(items) {
    return items.map((item, index) => this.navType(item, index));
  }

  // nav type
  navType(item, idx) {
    return (
      item.title ? this.navTitle(item, idx)
        : item.divider ? this.navDivider(item, idx)
          : item.label ? this.navLabel(item, idx)
            : item.children ? this.navDropdown(item, idx)
              : this.navItem(item, idx)
    );
  }

  // nav list section title
  navTitle(title, key) {
    const classes = classNames('nav-title', title.class, title.className);
    return <li key={key} className={classes}>{this.navWrapper(title)} </li>;
  }

  // simple wrapper for nav-title item
  navWrapper(item) {
    return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  }

  // nav list divider
  navDivider(divider, key) {
    const classes = classNames('divider', divider.class, divider.className);
    return <li key={key} className={classes} />;
  }

  // nav label with nav link
  navLabel(item, key) {
    const classes = {
      item: classNames('hidden-cn', item.class),
      link: classNames('nav-label', item.class ? item.class : ''),
      icon: classNames(
        'nav-icon',
        !item.icon ? 'fa fa-circle' : item.icon,
        item.label.variant ? `text-${item.label.variant}` : '',
        item.label.class ? item.label.class : '',
      )
    };
    return (
      this.navLink(item, key, classes)
    );
  }

  // nav dropdown
  navDropdown(item, key) {
    const itemIcon = this.navIcon(item)
    const attributes = this.getAttribs(item.attributes);
    const classes = classNames('nav-link', 'nav-dropdown-toggle', item.class, attributes.class, attributes.className);
    delete attributes.class;
    delete attributes.className;
    const itemAttr = this.getAttribs(item.itemAttr);
    const liClasses = classNames('nav-item', 'nav-dropdown', itemAttr.class, itemAttr.className);
    delete itemAttr.class;
    delete itemAttr.className;
    const NavLink = this.props.router.NavLink || RsNavLink;

    return (
      <li key={key} className={classNames(liClasses, {'open': this.isActiveRoute(item.url, this.props)})} {...itemAttr}>
        <NavLink activeClassName='open'
                 className={classes}
                 to={item.url || ''}
                 {...attributes}
                 onClick={(e) => this.handleClick(e, item)}>
          {itemIcon}{item.name}{this.navBadge(item.badge)}
        </NavLink>
        <ul className="nav-dropdown-items">
          {this.navList(item.children)}
        </ul>
      </li>);
  }

  // nav item with nav link
  navItem(item, key) {
    const classes = {
      item: classNames(item.class),
      link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
      icon: classNames('nav-icon', item.icon)
    };
    return (
      this.navLink(item, key, classes)
    );
  }

  navIcon(item) {
    const icon = item.icon;
    const iconObject = (typeof icon === 'object' && (icon !== null)) ? {iconClass: icon.class, iconClassName: icon.className, ...icon} : { iconClass: icon };
    const {iconClass, iconClassName, innerText, img, attributes} = iconObject;
    const iconAttr = {...attributes};
    delete iconAttr.class;
    delete iconAttr.className;
    delete iconAttr.img;
    const iconImg = img && img.src ? img : null;
    const iconInner = innerText || null;
    const classIcon = classNames('nav-icon', iconClass, iconClassName);
    const iconComponent = iconImg ? <img {...iconAttr} className={classIcon} src={iconImg.src} /> : <i {...iconAttr} className={classIcon}>{iconInner}</i>
    return (iconComponent)
  }

  // nav link
  navLink(item, key, classes) {
    const ref = React.createRef();
    const url = item.url || '';
    const itemIcon = this.navIcon(item)
    const itemBadge = this.navBadge(item.badge)
    const attributes = this.getAttribs(item.attributes)
    classes.link = classNames(classes.link, attributes.class, attributes.className)
    delete attributes.class;
    delete attributes.className;
    const itemAttr = this.getAttribs(item.itemAttr)
    classes.item = classNames(classes.item, itemAttr.class, itemAttr.className)
    delete itemAttr.class;
    delete itemAttr.className;
    const NavLink = this.props.router.NavLink || RsNavLink
    return (
      <NavItem key={key} className={classes.item} {...itemAttr}>
        { attributes.disabled ?
            <RsNavLink href={''} className={classes.link} {...attributes}>
              {itemIcon}{item.name}{itemBadge}
            </RsNavLink>
         :
          this.isExternal(url, this.props) || NavLink === RsNavLink ?
            <RsNavLink href={url} className={classes.link} active {...attributes}>
              {itemIcon}{item.name}{itemBadge}
            </RsNavLink> :
            <NavLink to={url} className={classes.link} activeClassName="active" onClick={() => this.hideMobile(ref)} ref={ref} {...attributes}>
              {itemIcon}{item.name}{itemBadge}
            </NavLink>
        }
      </NavItem>
    );
  }

  // badge addon to NavItem
  navBadge(badge) {
    if (badge) {
      const classes = classNames(badge.class, badge.className);
      return (
        <Badge className={classes} color={badge.variant}>{badge.text}</Badge>
      );
    }
    return null;
  }

  isExternal(url, props) {
    const linkType = typeof url;
    const link =
        linkType === 'string' ? url :
          linkType === 'object' && url.pathname ? url.pathname :
            linkType === 'function' && typeof url(props.location) === 'string'  ? url(props.location) :
              linkType === 'function' && typeof url(props.location) === 'object' ? url(props.location).pathname : '' ;
    return link.substring(0, 4) === 'http';
  }

  observeDomMutations() {
    if (window.MutationObserver) {

      // eslint-disable-next-line
      this.changes = new MutationObserver((mutations) => {

        const isSidebarMinimized = document.body.classList.contains('sidebar-minimized') || false
        this.setState({ sidebarMinimized: isSidebarMinimized })

        LayoutHelper.sidebarPSToggle(!isSidebarMinimized)

      });
      const element = document.body;
      this.changes.observe(element, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
    window.addEventListener('resize', this.onResize);
  }

  onResize() {
    LayoutHelper.sidebarPSToggle(true)
  }

  componentDidMount() {
    this.observeDomMutations()
  }

  componentWillUnmount() {
    try {
      this.changes.disconnect()
      window.removeEventListener('resize', this.onResize);
    } catch (ignore) {
      // eslint-disable-next-line
      console.warn('CoreUI SidebarNav failed to disconnect from MutationObserver', ignore)
    }
  }

  render() {
    const { className, children, navConfig, ...attributes } = this.props;

    delete attributes.isOpen
    delete attributes.staticContext
    delete attributes.Tag
    delete attributes.router

    const navClasses = classNames(className, 'sidebar-nav')

    const options = Object.assign({}, { suppressScrollX: true, suppressScrollY: this.state.sidebarMinimized })

    // sidebar-nav root
    return (
        <PerfectScrollbar className={navClasses} {...attributes} options={options} ref = {(ref) => { this._scrollBarRef = ref; }} >
          <Nav>
            {children || this.navList(navConfig.items)}
          </Nav>
        </PerfectScrollbar>
    );
  }
}

AppSidebarNav2.propTypes = propTypes;
AppSidebarNav2.defaultProps = defaultProps;

export default AppSidebarNav2;
