import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CHeaderNavLink from './CHeaderNavLink';

//component - CoreUI / CHeaderNavItem

const CHeaderNavItem = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    to,
    linkClassName,
    linkProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'c-header-nav-item',
  ), cssModule);

  if (!custom){
    return (
      <Tag {...attributes} className={classes} ref={innerRef}>
        <CHeaderNavLink {...linkProps} className={linkClassName} to={to}>
          {children}
        </CHeaderNavLink>
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef}>
      {children}
    </Tag>
  );

}

CHeaderNavItem.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  to: PropTypes.string,
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object
};

CHeaderNavItem.defaultProps = {
  custom: true,
  tag: 'li'
};

export default CHeaderNavItem;
