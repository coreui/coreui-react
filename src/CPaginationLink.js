import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import {Context} from './CPagination';

//component - CoreUI / CPaginationLink

const CPaginationLink = props=>{

  let {
    tag: Tag,
    className,
    cssModule,
    //
    innerRef,
    next,
    previous,
    onClick,
    type,
    n,
    ...attributes
  } = props;

  const context = useContext(Context);

  const linkClick = (e)=>{
    onClick && onClick(e, type, n);
    context.paginationClick && context.paginationClick(e, type, n);
  }

  //render

  const classes = mapToCssModules(classNames(
    className,
    'page-link'
  ), cssModule);

  let defaultAriaLabel;
  if (previous) {
    defaultAriaLabel = 'Previous';
  } else if (next) {
    defaultAriaLabel = 'Next';
  }
  const ariaLabel = props['aria-label'] || defaultAriaLabel;

  let defaultCaret;
  if (previous) {
    defaultCaret = <React.Fragment>&lsaquo;</React.Fragment>;
  } else if (next) {
    defaultCaret = <React.Fragment>&rsaquo;</React.Fragment>;
  }

  let children = props.children;

  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  if (previous || next) {
    children = [
      <span
        aria-hidden="true"
        key="caret"
      >
        {children || defaultCaret}
      </span>,
      <span
        className="sr-only"
        key="sr"
      >
        {ariaLabel}
      </span>,
    ];
  }

  return (
    <Tag
      {...attributes}
      className={classes}
      onClick={linkClick}
      aria-label={ariaLabel}
      ref={innerRef}
    >
      {children}
    </Tag>
  );

}

CPaginationLink.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  next: PropTypes.bool,
  type: PropTypes.string,
  n: PropTypes.number,
  previous: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string
};

CPaginationLink.defaultProps = {
  tag: 'a',
};

export default CPaginationLink;
