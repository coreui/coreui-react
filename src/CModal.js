import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {mapToCssModules,
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  omit,
  focusableElements,
  TransitionTimeouts} from './Shared/helper.js';
import CPortal from './CPortal';
import CFade from './CFade';

function noop() { }

const FadePropTypes = PropTypes.shape(CFade.propTypes);

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  external: PropTypes.node,
  fade: PropTypes.bool,
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes
};

const propsToOmit = Object.keys(propTypes);

//component - CoreUI / CModal

const CModal = props=>{

  const [isOpen, setIsOpen] = useState(props.isOpen);

  const fields = useRef({
    _element: null,
    _originalBodyPadding: null,
    lastProps: {}
  }).current;

  const onOpened = (node, isAppearing)=>{
    props.onOpened();
    (props.modalTransition.onEntered || noop)(node, isAppearing);
  }

  const onClosed = node=>{
    props.onClosed();
    (props.modalTransition.onExited || noop)(node);
    destroy();
    if (fields._isMounted) {
      setIsOpen(false);
    }
  }

  const setFocus = ()=>{
    if (fields._dialog && fields._dialog.parentNode && typeof fields._dialog.parentNode.focus === 'function') {
      fields._dialog.parentNode.focus();
    }
  }

  const getFocusableChildren = ()=>{
    return fields._element.querySelectorAll(focusableElements.join(', '));
  }

  const getFocusedChild = ()=>{
    let currentFocus;
    const focusableChildren = getFocusableChildren();
    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }
    return currentFocus;
  }

  const handleBackdropClick = e=>{
    if (e.target === fields._mouseDownElement) {
      e.stopPropagation();
      if (!isOpen || props.backdrop !== true) return;
      const backdrop = fields._dialog ? fields._dialog.parentNode : null;
      if (backdrop && e.target === backdrop && props.toggle) {
        props.toggle(e);
      }
    }
  }

  const handleTab = e=>{
    if (e.which !== 9) return;
    const focusableChildren = getFocusableChildren();
    const totalFocusable = focusableChildren.length;
    const currentFocus = getFocusedChild();
    let focusedIndex = 0;
    for (let i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }
    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  }

  const handleBackdropMouseDown = e=>{
    fields._mouseDownElement = e.target;
  }

  const handleEscape = e=>{
    if (props.isOpen && props.keyboard && e.keyCode === 27 && props.toggle) {
      e.preventDefault();
      e.stopPropagation();
      props.toggle(e);
    }
  }

  const init = ()=>{
    try {
      fields._triggeringElement = document.activeElement;
    } catch (err) {
      fields._triggeringElement = null;
    }
    fields._element = document.createElement('div');
    fields._element.setAttribute('tabindex', '-1');
    fields._element.style.position = 'relative';
    fields._element.style.zIndex = props.zIndex;
    fields._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();
    document.body.appendChild(fields._element);
    if (CModal.openCount === 0) {
      document.body.className = classNames(
        document.body.className,
        mapToCssModules('modal-open', props.cssModule)
      );
    }
    CModal.openCount += 1;
  }

  const destroy = ()=>{
    if (fields._element) {
      document.body.removeChild(fields._element);
      fields._element = null;
    }
    if (fields._triggeringElement) {
      if (fields._triggeringElement.focus) fields._triggeringElement.focus();
      fields._triggeringElement = null;
    }
    if (CModal.openCount <= 1) {
      const modalOpenClassName = mapToCssModules('modal-open', props.cssModule);
      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
      const modalOpenClassNameRegex = new RegExp(`(^| )${modalOpenClassName}( |$)`);
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }
    CModal.openCount -= 1;
    setScrollbarWidth(fields._originalBodyPadding);
  }

  const setState = (oVal, nVal, setF)=>{
    if (nVal===oVal)
      return;
    setF(nVal);
  }

  // effect

  useEffect(() => {
    //did mount
    if (props.onEnter) {
      props.onEnter();
    }
    if (isOpen && props.autoFocus) {
      setFocus();
    }
    fields._isMounted = true;
    return function cleanup() {
      if (props.onExit) {
        props.onExit();
      }
      if (isOpen) {
        destroy();
      }
      fields._isMounted = false;
    };
  },
  []);

  useEffect(() => {
    if (props.autoFocus && isOpen && !fields.lastIsOpen) {
      setFocus();
    }
    if (fields._element && fields.lastProps.zIndex !== props.zIndex) {
      fields._element.style.zIndex = props.zIndex;
    }
  },
  [isOpen]);

  useEffect(() => {
    fields.lastProps = {...props};
    fields.lastIsOpen = isOpen;
    fields.firstRender = false;
  });

  // render

  const renderModalDialog = ()=>{
    const attributes = omit(props, propsToOmit);
    const dialogBaseClass = 'modal-dialog';
    return (
      <div
        {...attributes}
        className={mapToCssModules(classNames(dialogBaseClass, props.className, {
          [`modal-${props.size}`]: props.size,
          [`${dialogBaseClass}-centered`]: props.centered,
        }), props.cssModule)}
        role="document"
        ref={(c) => {
          fields._dialog = c;
        }}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', props.contentClassName),
            props.cssModule
          )}
        >
          {props.children}
        </div>
      </div>
    );

  }

  if (props.isOpen && !fields.lastProps.isOpen){
    setState(isOpen, props.isOpen, setIsOpen);
  }
  if (!fields.firstRender){
    if (isOpen && !fields.lastIsOpen){
      init();
    }
  }

  if (isOpen) {

    const {
      cssModule,
      innerRef,
      wrapClassName,
      modalClassName,
      backdropClassName,
      isOpen,
      backdrop,
      role,
      labelledBy,
      external
    } = props;

    const modalAttributes = {
      onClick: handleBackdropClick,
      onMouseDown: handleBackdropMouseDown,
      onKeyUp: handleEscape,
      onKeyDown: handleTab,
      style: { display: 'block' },
      'aria-labelledby': labelledBy,
      role,
      tabIndex: '-1'
    };

    const hasTransition = props.fade;

    const modalTransition = {
      ...CFade.defaultProps,
      ...props.modalTransition,
      baseClass: hasTransition ? props.modalTransition.baseClass : '',
      timeout: hasTransition ? props.modalTransition.timeout : 0,
    };

    const backdropTransition = {
      ...CFade.defaultProps,
      ...props.backdropTransition,
      baseClass: hasTransition ? props.backdropTransition.baseClass : '',
      timeout: hasTransition ? props.backdropTransition.timeout : 0,
    };

    const Backdrop = backdrop && (
      hasTransition ?
        (<CFade
          {...backdropTransition}
          in={isOpen && !!backdrop}
          cssModule={cssModule}
          className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
        />)
        : <div className={mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)} />
    );

    return (
      <CPortal node={fields._element}>
        <div className={mapToCssModules(wrapClassName)}>
          <CFade
            {...modalAttributes}
            {...modalTransition}
            in={isOpen}
            onEntered={onOpened}
            onExited={onClosed}
            cssModule={cssModule}
            className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
            innerRef={innerRef}
          >
            {external}
            {renderModalDialog()}
          </CFade>
          {Backdrop}
        </div>
      </CPortal>
    );
  }

  return null;

}

CModal.propTypes = propTypes;

CModal.defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal,
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade
  },
};

CModal.openCount = 0;

export default CModal;
