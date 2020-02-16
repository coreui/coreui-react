import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CBreadcrumbItem

const CBreadcrumbItem = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    active,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} aria-current={active ? 'page' : undefined} ref={innerRef} />
  );

}

CBreadcrumbItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool
};

CBreadcrumbItem.defaultProps = {
  tag: 'li'
};

export default CBreadcrumbItem;
