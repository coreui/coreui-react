import React, { Component } from 'react';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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
  }

  handleClick(e) {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1
      ? 'nav-item nav-dropdown open'
      : 'nav-item nav-dropdown';
  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  }

  getAttribs(attributes) {
    return JSON.parse(JSON.stringify(attributes || {}));
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
    const classIcon = classNames('nav-icon', item.icon);
    const attributes = this.getAttribs(item.attributes);
    const classes = classNames('nav-link', 'nav-dropdown-toggle', item.class, attributes.class, attributes.className);
    delete attributes.class;
    delete attributes.className;
    const itemAttr = this.getAttribs(item.itemAttr);
    const liClasses = classNames(this.activeRoute(item.url, this.props), itemAttr.class, itemAttr.className)
    delete itemAttr.class;
    delete itemAttr.className;
    return (
      <li key={key} className={liClasses} {...itemAttr}>
        <a className={classes} href="#" onClick={this.handleClick} {...attributes}><i className={classIcon}/>
          {item.name}{this.navBadge(item.badge)}
        </a>
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

  // nav link
  navLink(item, key, classes) {
    const url = item.url || '';
    const itemIcon = <i className={classes.icon} />
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
            <NavLink to={url} className={classes.link} activeClassName="active" onClick={this.hideMobile} {...attributes}>
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

  render() {
    const { className, children, navConfig, ...attributes } = this.props;

    delete attributes.isOpen
    delete attributes.staticContext
    delete attributes.Tag
    delete attributes.router

    const navClasses = classNames(className, 'sidebar-nav');

    // ToDo: find better rtl fix
    const isRtl = getComputedStyle(document.documentElement).direction === 'rtl'

    // sidebar-nav root
    return (
      <PerfectScrollbar className={navClasses} {...attributes} options={{ suppressScrollX: !isRtl }} >
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
