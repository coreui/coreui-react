import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CNavLink from './CNavLink';

//component - CoreUI / CNavItem

const CNavItem = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    active,
    linkClassName,
    linkProps,
    to,
    href,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'nav-item',
    active ? 'active' : false
  ), cssModule);

  const linkClasses = mapToCssModules(classNames(
    linkClassName,
  ), cssModule);

  if (!custom){
    return (
      <Tag {...attributes} className={classes} ref={innerRef}>
        <CNavLink {...linkProps} className={linkClasses} to={to} href={href} children={children} />
      </Tag>
    );
  }

  return (
      <Tag {...attributes} className={classes} ref={innerRef} children={children} />
  );

}

CNavItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  custom: PropTypes.bool,
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object,
  to: PropTypes.string,
  href: PropTypes.string
};

CNavItem.defaultProps = {
  tag: 'li'
};

export default CNavItem;
