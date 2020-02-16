import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CButton

const CButton = props=>{

  let {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    active,
    'aria-label': ariaLabel,
    block,
    close,
    color,
    size,
    textHtml,
    pressed,
    shape,
    variant,
    ...attributes
  } = props;

  const onClick = e=>{
    if (props.disabled) {
      e.preventDefault();
      return;
    }
    if (props.onClick) {
      props.onClick(e);
    }
  }

  //render

  if (close && typeof children === 'undefined') {
    children = <span aria-hidden>×</span>;
  }

  const btnColor = `btn${variant ? '-'+variant : ''}-${color}`;

  const classes = mapToCssModules(classNames(
    className,
    { close },
    close || 'btn',
    close || btnColor,
    size ? `btn-${size}` : false,
    block ? 'btn-block' : false,
    shape ? `btn-${shape}` : false,
    pressed ? 'btn-pressed' : false,
    { 'active': active,
    'disabled': props.disabled }
  ), cssModule);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  const defaultAriaLabel = close ? 'Close' : null;

  return <Tag
    type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
    {...attributes}
    className={classes}
    ref={innerRef}
    onClick={onClick}
    aria-label={ariaLabel || defaultAriaLabel}
    children={textHtml ? textHtml : children}
  />;

}

CButton.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  block: PropTypes.bool,
  shape: PropTypes.string,
  variant: PropTypes.oneOf(['', 'ghost', 'outline']),
  color: PropTypes.string,
  close: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  pressed: PropTypes.bool,
  textHtml: PropTypes.string,
  'aria-label': PropTypes.string,
};

CButton.defaultProps = {
  tag: 'button'
};

//export
export default CButton;
