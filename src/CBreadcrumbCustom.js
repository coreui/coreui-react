import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CBreadcrumbCustom

const CBreadcrumbCustom = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    listClassName,
    listTag: ListTag,
    'aria-label': label,
    listProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className
  ), cssModule);

  const listClasses = mapToCssModules(classNames(
    'breadcrumb',
    listClassName
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} aria-label={label} ref={innerRef}>
      <ListTag className={listClasses} {...listProps}>
        {children}
      </ListTag>
    </Tag>
  );

};

CBreadcrumbCustom.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  listTag: tagPropType,
  listClassName: PropTypes.string,
  listProps: PropTypes.object,
  'aria-label': PropTypes.string
};

CBreadcrumbCustom.defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  'aria-label': 'breadcrumb'
};

export default CBreadcrumbCustom;
