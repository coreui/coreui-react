import React, {useState, useContext, useMemo, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CIcon } from '@coreui/icons-react';

import {Context} from './CSidebar';

//component - CoreUI / CSidebarNavDropdown

const CSidebarNavDropdown = props=>{

  const {
    tag: Tag,
    children,
    className,
    //
    innerRef,
    icon,
    fontIcon,
    name,
    show,
    toggle,
    toggleItem,
    route,
    ...attributes
  } = props;

  const [isOpen, setIsOpen] = useState(show);
  const compData = useRef({}).current;

  // context
  const context = useContext(Context);

  let dropdownMode;

  // methods

  const onClick = (e)=>{
    setIsOpen(!isOpen);
    toggle && toggle(e);
  }
  const onItemClick = (e)=>{
    toggleItem && toggleItem(e);
  }

  // computed

  if (context.dropdownMode)
    dropdownMode = context.dropdownMode;
  else
    dropdownMode = 'openActive';

  //watch
  //show
  useMemo(()=>{
    if (compData.nextRender)
      setIsOpen(show);
  },[show]);
  //dropdownMode
  useMemo(()=>{
    const mode = dropdownMode;
    if (mode === 'close') {
      setIsOpen(false);
    } else if (mode === 'closeInactive' && route) {
      setIsOpen(route.fullPath.includes(route));
    }  else if (mode === 'openActive' && !isOpen && route) {
      setIsOpen(route.fullPath.includes(route));
    }
  },[route]);

  //effect
  useEffect(() => {
    compData.nextRender = true;
  }, []);

  //render

  const classes = classNames(
    className,
    'c-sidebar-nav-dropdown',
    isOpen ? 'c-show' : null
  );

  let iconProps;
  if (typeof icon === 'object')
    iconProps = icon;
  else
    iconProps = {name:icon};

  const iconClasses = classNames(
    'c-sidebar-nav-icon',
    fontIcon ? fontIcon : null
  );

  return (
    <Tag className={classes} {...attributes} ref={innerRef}>
      <a className="c-sidebar-nav-dropdown-toggle" onClick={onClick}>
        {icon ? <CIcon className="c-sidebar-nav-icon" {...iconProps} /> : ''}
        {fontIcon ? <i className={iconClasses}></i> : ''}
        {name}
      </a>
      <ul className="c-sidebar-nav-dropdown-items" onClick={onItemClick}>
        {children}
      </ul>
    </Tag>
  );

}

CSidebarNavDropdown.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  name: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fontIcon: PropTypes.string,
  show: PropTypes.bool,
  toggle: PropTypes.func,
  toggleItem: PropTypes.func,
  route: PropTypes.string
};

CSidebarNavDropdown.defaultProps = {
  tag: 'li'
};

export default CSidebarNavDropdown;
