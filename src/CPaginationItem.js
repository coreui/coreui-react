import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CPaginationLink from './CPaginationLink';

//component - CoreUI / CPaginationItem

const CPaginationItem = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    innerRef,
    active,
    disabled,
    linkClassName,
    linkProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      'active': active,
      'disabled': disabled,
    }
  ), cssModule);

  const linkClasses = mapToCssModules(classNames(
    linkClassName,
  ), cssModule);

  if (!custom){
    return (
      <Tag {...attributes} className={classes} ref={innerRef}>
        <CPaginationLink className={linkClasses} {...linkProps} children={children} />
      </Tag>
    );
  }

  return (<Tag {...attributes} className={classes} children={children} ref={innerRef} />);

}

CPaginationItem.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object
};

CPaginationItem.defaultProps = {
  tag: 'li',
  active: false
};

export default CPaginationItem;
