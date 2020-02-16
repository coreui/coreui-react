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
        <CHeaderNavLink {...linkProps} className={linkClassName} to={to} children={children} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} children={children} ref={innerRef} />
  );

}

CHeaderNavItem.propTypes = {
  tag: tagPropType,
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
  tag: 'li'
};

export default CHeaderNavItem;
