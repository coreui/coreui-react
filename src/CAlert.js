import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CFade from './CFade';

//component - CoreUI / CAlert

const CAlert = props=>{

  let {
    tag: Tag,
    children,
    className,
    cssModule,
    custom,
    //
    toggle,
    transition,
    closeAriaLabel,
    closeClassName,
    color,
    fade,
    show,
    iconSlot,
    closeProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': toggle }
  ), cssModule);

  const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);

  const alertTransition = {
    ...CFade.defaultProps,
    ...transition,
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0,
  };

  const [isOpen, setIsOpen] = useState(true);

  if (!custom){
    let userToggle = toggle;
    toggle = ()=>{
      setIsOpen(!isOpen);
      if (userToggle)
        userToggle();
    };
    show = isOpen;
  }

  return (
    <CFade {...attributes} {...alertTransition} tag={Tag} className={classes} in={show} role="alert">
      {!custom ?
        <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle} {...closeProps}>
          <span aria-hidden="true">{iconSlot}</span>
        </button>
        : null}
      {children}
    </CFade>
  );

}

CAlert.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  closeClassName: PropTypes.string,
  closeProps: PropTypes.object,
  closeAriaLabel: PropTypes.string,
  color: PropTypes.string,
  fade: PropTypes.bool,
  show: PropTypes.bool,
  transition: PropTypes.shape(CFade.propTypes),
  iconSlot: PropTypes.node
};

CAlert.defaultProps = {
  tag: 'div',
  //
  color: 'success',
  show: true,
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...CFade.defaultProps,
    unmountOnExit: true,
  },
  iconSlot: <React.Fragment>&times;</React.Fragment>
};

//export
export default CAlert;
