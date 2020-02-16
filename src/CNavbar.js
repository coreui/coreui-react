import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, tagPropType} from './Shared/helper.js';

const getExpandClass = expand=>{
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }
  return `navbar-expand-${expand}`;
};

//component - CoreUI / CNavbar

const CNavbar = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    expandable,
    light,
    fixed,
    sticky,
    color,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'navbar',
    getExpandClass(expandable),
    light ? 'navbar-light' : 'navbar-dark',
    {
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CNavbar.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  light: PropTypes.bool,
  color: PropTypes.string,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  expandable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

CNavbar.defaultProps = {
  tag: 'nav',
  expandable: false,
};

export default CNavbar;
