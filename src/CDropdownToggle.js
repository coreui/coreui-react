import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import {Target} from 'react-popper';
import CButton from './CButton';
import {Context} from './CDropdownCustom';

//component - CoreUI / CDropdownToggle

const CDropdownToggle = props=>{

  const {
    className,
    color,
    cssModule,
    //
    innerRef,
    caret,
    split,
    nav,
    header,
    tag,
    togglerHtml,
    ...attributes
  } = props;
  
  const context = useContext(Context);

  const onClick = e=>{
    if (props.disabled) {
      e.preventDefault();
      return;
    }
    if (props.nav && !props.tag) {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick(e);
    }
    context.toggle(e);
  }

  //render

  const ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';

  const classes = mapToCssModules(classNames(
    className,
    {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav && !header,
      'c-header-nav-link': nav && header
    }
  ), cssModule);

  const children = togglerHtml || attributes.children || <span className="sr-only">{ariaLabel}</span>;

  let Tag;
  let isButton = false;

  if (nav  && !tag) {
    Tag = 'a';
    attributes.href = '#';
  } else if (!tag) {
    Tag = CButton;
    attributes.color = color;
    attributes.cssModule = cssModule;
    isButton = true;
  } else {
    Tag = tag;
  }

  if (context.inNavbar) {
    if (isButton)
      return (
        <Tag
          {...attributes}
          className={classes}
          onClick={onClick}
          aria-expanded={context.isOpen}
        >
          {children}
        </Tag>
      );
    else
      return (
        <Tag
          {...attributes}
          className={classes}
          onClick={onClick}
          aria-expanded={context.isOpen}
          ref={innerRef}
        >
          {children}
        </Tag>
      );
  }

  return (
    <Target
      {...attributes}
      className={classes}
      component={Tag}
      onClick={onClick}
      aria-expanded={context.isOpen}
      ref={innerRef}
    >
      {children}
    </Target>
  );

}

CDropdownToggle.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  togglerHtml: PropTypes.node,
  nav: PropTypes.bool,
  header: PropTypes.bool,
};

CDropdownToggle.defaultProps = {
  'aria-haspopup': true
};

export default CDropdownToggle;
