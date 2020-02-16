import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules, omit, tagPropType} from './Shared/helper.js';
import {Context} from './CDropdownCustom';

//component - CoreUI / CDropdownItem

const CDropdownItem = props=>{

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    color,
    divider,
    header,
    active,
    ...attributes
  } = omit(props, ['toggle']);

  const context = useContext(Context);

  const onClick = e=>{
    if (props.disabled || props.header || props.divider) {
      e.preventDefault();
      return;
    }
    if (props.onClick) {
      props.onClick(e);
    }
    if (props.toggle) {
      context.toggle(e);
    }
  }

  const getTabIndex = ()=>{
    if (props.disabled || props.header || props.divider) {
      return '-1';
    }
    return '0';
  }

  //render

  const tabIndex = getTabIndex();
  const role = tabIndex > -1 ? 'menuitem' : undefined;

  const classes = mapToCssModules(classNames(
    className,
    header ? 'dropdown-header' : divider ? 'dropdown-divider' : 'dropdown-item',
    active ? 'active' : null,
    color ? 'bg-'+color : null,
    {
      disabled: attributes.disabled,
    }
  ), cssModule);

  if (Tag === 'button') {
    if (header) {
      Tag = 'h6';
    } else if (divider) {
      Tag = 'div';
    } else if (props.href) {
      Tag = 'a';
    }
  }

  return (
    <Tag
      type={(Tag === 'button' && (attributes.onClick || props.toggle)) ? 'button' : undefined}
      {...attributes}
      tabIndex={tabIndex}
      role={role}
      className={classes}
      onClick={onClick}
      ref={innerRef}
    />
  );

}

CDropdownItem.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  toggle: PropTypes.bool
};

CDropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};

export default CDropdownItem;
