import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CLink from './CLink';

//component - CoreUI / CListGroupItem

const CListGroupItem = props=>{

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    active,
    disabled,
    action,
    color,
    accent,
    ...attributes
  } = props;

  if (disabled) {
    attributes.onClick = e=>{
      e.preventDefault();
    };
  }

  //render

  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action||attributes.href||attributes.to||Tag=='button' ? 'list-group-item-action' : false,
    color ? `list-group-item-${color}` : false,
    accent ? `list-group-item-accent-${accent}` : false,
    'list-group-item'
  ), cssModule);

  if (props.href || props.to){
    Tag = CLink;
    return (
      <Tag {...attributes} className={classes} />
    );
  }
  else {
    return (
      <Tag {...attributes} className={classes} ref={innerRef} />
    );
  }

}

CListGroupItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  accent: PropTypes.string,
  action: PropTypes.bool
};

CListGroupItem.defaultProps = {
  tag: 'li'
};

export default CListGroupItem;
