import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';

//component - CoreUI / CModalHeader

const CModalHeader = props=>{

  const {
    tag: Tag,
    children,
    className,
    cssModule,
    //
    innerRef,
    toggle,
    wrapTag: WrapTag,
    closeAriaLabel,
    charCode,
    close,
    mainClassName,
    mainProps,
    ...attributes
  } = props;

  //render

  let closeButton;

  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule);

  const mainClasses = mapToCssModules(classNames(
    mainClassName,
    'modal-title'
  ), cssModule);

  if (!close && toggle) {
    const closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = (
      <button type="button" onClick={toggle} className={mapToCssModules('close', cssModule)} aria-label={closeAriaLabel}>
        <span aria-hidden="true">{closeIcon}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes} ref={innerRef}>
      <Tag className={mainClasses} {...mainProps}>
        {children}
      </Tag>
      {close || closeButton}
    </WrapTag>
  );

}

CModalHeader.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object,
  mainClassName: PropTypes.string,
  mainProps: PropTypes.object
};

CModalHeader.defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close',
  charCode: 215
};

export default CModalHeader;
