import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import CSidebarNavTitle from './CSidebarNavTitle';
import CSidebarNavDivider from './CSidebarNavDivider';
import CSidebarNavDropdown from './CSidebarNavDropdown';
import CSidebarNavItem from './CSidebarNavItem';

//component - CoreUI / CSidebarNav

const CSidebarNav = props=>{

  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    navConfig,
    ...attributes
  } = props;

  const isExternal = url=>{
    const link = url ? url.substring(0, 4) : '';
    return link === 'http';
  }

  // render items

  // nav dropdown
  const navDropdown = (item, key)=>{
    return (
        <CSidebarNavDropdown
          key={key}
          icon={item.icon}
          name={item.name}
          show={props.location.pathname.indexOf(item.url)>-1}
        >
          {navList(item.children)}
        </CSidebarNavDropdown>
    )
  }
  // nav item with nav link
  const navItem = (item, key)=>{

    let badgeProps;
    if (item.badge){
      badgeProps={
        text: item.badge.text,
        color: item.badge.variant,
        className: item.badge.class
      }
    }
    else {
      badgeProps={};
    }


    let linkProps;
    //
    if (item.attributes){
      linkProps = item.attributes;
      //replace, innerRef (func, object)
      //activeStyle, exact: bool, strict: bool
    }
    else {
      linkProps = {};
    }
    //
    let disabled = false;
    if (item.attributes && item.attributes.disabled){
      disabled = true;
    }
    disabled && (linkProps['disabled'] = disabled);


    let classes;
    if (item.class)
      classes = item.class;
    else {
      classes = '';
    }

    if (isExternal(item.url))
      linkProps['href'] = item.url;
    else
      linkProps['to'] = item.url;

    let compProps;
    if (item.itemAttr)
      compProps = item.itemAttr;
    else {
      compProps = {}
    }

    return <CSidebarNavItem
      {...compProps}
      className={classes}
      key={key}
      icon = {item.icon}
      badge = {badgeProps}
      linkClassName={props.location&&props.location.pathname.indexOf(item.url)>-1 ? 'c-active' : null}
      linkProps={linkProps}
      >
        {item.name}
      </CSidebarNavItem>

  }

  // simple wrapper for nav-title item
  const navWrapper = item=>{
    return item.wrapper && item.wrapper.element ? React.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
  }
  // nav list section title
  const navTitle = (title, key)=>{
    return <CSidebarNavTitle key={key} className={title.class}>{navWrapper(title)}</CSidebarNavTitle>;
  }

  // nav list divider
  const navDivider = (divider, key)=>{
    return <CSidebarNavDivider key={key} className={divider.class} />;
  }

  // nav label with nav link
  const navLabel = (item, key)=>{

    const classes = classNames(
      item.label.class ? item.label.class : null,
      item.label.variant ? 'text-'+item.label.variant : null,
    )

    return <CSidebarNavItem
      key={key}
      linkClassName={classes}
      linkProps={{
        icon: item.icon ? item.icon : 'user',
        to: item.url,
        label: true
      }}
      >
        {item.name}
      </CSidebarNavItem>

  }

  // select nav type
  const navType = (item, idx)=>{
    return (
      item.title ? navTitle(item, idx)
        : item.divider ? navDivider(item, idx)
          : item.label ? navLabel(item, idx)
            : item.children ? navDropdown(item, idx)
              : navItem(item, idx)
    );
  }

  // nav list
  const navList = items=>{
    return items.map((item, index) => navType(item, index));
  }

  //render

  delete attributes.Tag;

  const navClasses = classNames(
    className,
    'c-sidebar-nav',
    'h-100'
  );

  //state

  const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl'

  // sidebar-nav root

  return (
      <PerfectScrollbar options={{ suppressScrollX: !isRtl }} className={navClasses} ref={innerRef} component={Tag} {...attributes}>
        {navConfig.items ? navList(navConfig.items) : null}
        {children}
      </PerfectScrollbar>
  );
}

CSidebarNav.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  location: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  navConfig: PropTypes.any
};

CSidebarNav.defaultProps = {
  tag: 'ul',
  navConfig: {}
};

export default CSidebarNav;
