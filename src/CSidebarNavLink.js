import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CLink from './CLink';
import CBadge from './CBadge';
import CIcon from './CIcon';

//component - CoreUI / CSidebarNavLink

const CSidebarNavLink = props=>{

  const {
    children,
    className,
    custom,
    //
    label,
    icon,
    fontIcon,
    badgeClassName,
    badgeProps,
    ...attributes
  } = props;

  // render

  const classes = classNames(
    className,
    label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link'
  );

  let iconProps;
  if (typeof icon === 'object')
    iconProps = icon;
  else
    iconProps = {name:icon};

  if (!custom){
    const iconClasses = classNames(
      'c-sidebar-nav-icon',
      fontIcon ? fontIcon : null
    );
    const badgeClasses = classNames(
      badgeClassName
    );
    return (
      <CLink {...attributes} className={classes}>
        {icon?<CIcon className="c-sidebar-nav-icon" {...iconProps} />:''}
        {fontIcon?<i className={iconClasses} />:''}
        {children}
        {badgeProps?<CBadge className={badgeClasses} {...badgeProps}>{badgeProps.text}</CBadge>:''}
      </CLink>
    );
  }

  return (
    <CLink {...attributes} className={classes}/>
  );

}

CSidebarNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  icon: PropTypes.oneOfType(['string', 'object']),
  label: PropTypes.bool,
  fontIcon: PropTypes.string,
  badgeProps: PropTypes.object,
  badgeClassName: PropTypes.object
};

CSidebarNavLink.defaultProps = {
};

export default CSidebarNavLink;
