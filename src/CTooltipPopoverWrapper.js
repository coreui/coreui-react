import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import CPopperContent from './CPopperContent';
import {
  getTarget,
  targetPropType,
  omit,
  PopperPlacements,
  mapToCssModules,
  DOMElement
} from './Shared/helper.js';

// global

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};

const isInDOMSubtree = (element, subtreeRoot)=>{
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

//component - CoreUI / CTooltipPopoverWrapper

const CTooltipPopoverWrapper = props=>{

  const {
    className,
    cssModule,
    //
    innerRef,
    innerClassName,
    target,
    show: isOpen,
    hideArrow,
    boundariesElement,
    placement,
    placementPrefix,
    arrowClassName,
    container,
    modifiers,
    offset,
  } = props;

  const fields = useRef({_target: null}).current;

  const onMouseOverTooltipContent = ()=>{
    if (fields.trigger.indexOf('hover') > -1 && !fields.autohide) {
      if (fields._hideTimeout) {
        clearHideTimeout();
      }
    }
  }

  const onMouseLeaveTooltipContent = e=>{
    if (fields.trigger.indexOf('hover') > -1 && !fields.autohide) {
      if (fields._showTimeout) {
        clearShowTimeout();
      }
      e.persist();
      fields._hideTimeout = setTimeout(
        ()=>hide(e),
        getDelay('hide')
      );
    }
  }

  const onEscKeyDown = e=>{
    if (e.key === 'Escape') {
      hide(e);
    }
  }

  const getRef = ref=>{
    const {innerRef} = props;
    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }
    fields._popover = ref;
  }

  const getDelay = key=>{
    if (typeof fields.delay === 'object') {
      return isNaN(fields.delay[key]) ? DEFAULT_DELAYS[key] : fields.delay[key];
    }
    return fields.delay;
  }

  const show = e=>{
    if (!fields.isOpen) {
      clearShowTimeout();
      toggle(e);
    }
  }

  const showWithDelay = e=>{
    if (fields._hideTimeout) {
      clearHideTimeout();
    }
    fields._showTimeout = setTimeout(
      ()=>show(e),
      getDelay('show')
    );
  }

  const hide = e=>{
    if (fields.isOpen) {
      clearHideTimeout();
      toggle(e);
    }
  }

  const hideWithDelay = e=>{
    if (fields._showTimeout) {
      clearShowTimeout();
    }
    fields._hideTimeout = setTimeout(
      ()=>hide(e),
      getDelay('hide')
    );
  }

  const clearShowTimeout = ()=>{
    clearTimeout(fields._showTimeout);
    fields._showTimeout = undefined;
  }

  const clearHideTimeout = ()=>{
    clearTimeout(fields._hideTimeout);
    fields._hideTimeout = undefined;
  }

  const handleDocumentClick = e=>{
    const triggers = fields.trigger.split(' ');
    if (triggers.indexOf('legacy') > -1 && (fields.isOpen || isInDOMSubtree(e.target, fields._target))) {
      if (fields._hideTimeout) {
        clearHideTimeout();
      }
      if (fields.isOpen && !isInDOMSubtree(e.target, fields._popover)) {
        hideWithDelay(e);
      } else {
        showWithDelay(e);
      }
    }
    else if (triggers.indexOf('click') > -1 && isInDOMSubtree(e.target, fields._target)) {
      if (fields._hideTimeout) {
        clearHideTimeout();
      }
      if (!fields.isOpen) {
        showWithDelay(e);
      } else {
        hideWithDelay(e);
      }
    }
  }

  const addTargetEvents = ()=>{
    if (props.trigger) {
      let triggers = props.trigger.split(' ');
      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          ['click', 'touchstart'].forEach(event =>
            document.addEventListener(event, handleDocumentClick, true)
          );
          fields._handleDocumentClick = handleDocumentClick;
        }

        if (fields._target) {
          if (triggers.indexOf('hover') > -1) {
            fields._target.addEventListener(
              'mouseover',
              showWithDelay,
              true
            );
            fields._target.addEventListener(
              'mouseout',
              hideWithDelay,
              true
            );
            fields._showWithDelay = showWithDelay;
            fields._hideWithDelay = hideWithDelay;
          }
          if (triggers.indexOf('focus') > -1) {
            fields._target.addEventListener('focusin', show, true);
            fields._target.addEventListener('focusout', hide, true);
            fields._show = show;
            fields._hide = hide;
          }
          fields._target.addEventListener('keydown', onEscKeyDown, true);
          fields._onEscKeyDown = onEscKeyDown;
        }

      }
    }
  }

  const removeTargetEvents = ()=>{

    if (fields._target) {
      fields._target.removeEventListener(
        'mouseover',
        fields._showWithDelay,
        true
      );
      fields._target.removeEventListener(
        'mouseout',
        fields._hideWithDelay,
        true
      );
      fields._target.removeEventListener('keydown', fields._onEscKeyDown, true);
      fields._target.removeEventListener('focusin', fields._show, true);
      fields._target.removeEventListener('focusout', fields._hide, true);
    }

    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, fields._handleDocumentClick, true)
    );

  }

  const updateTarget = ()=>{
    const newTarget = getTarget(props.target);
    if (newTarget !== fields._target) {
      removeTargetEvents();
      fields._target = newTarget;
      addTargetEvents();
    }
  }

  const toggle = e=>{
    if (fields.disabled) {
      return e && e.preventDefault();
    }
    return fields.toggle(e);
  }


  //effect
  useEffect(() => {
    updateTarget();
    return function cleanup() {
      removeTargetEvents();
    };
  },
  []);

  //render

  fields.isOpen = props.show;
  fields.autohide = props.autohide;
  fields.trigger = props.trigger;
  fields.delay = props.delay;
  fields.toggle = props.toggle;
  fields.disabled = props.disabled;

  if (!props.show) {
    return null;
  }

  updateTarget();

  const attributes = omit(props, Object.keys(CTooltipPopoverWrapper.propTypes));
  const popperClasses = mapToCssModules(className, cssModule);
  const classes = mapToCssModules(innerClassName, cssModule);

  return (
    <CPopperContent
      className={popperClasses}
      target={target}
      show={isOpen}
      hideArrow={hideArrow}
      boundariesElement={boundariesElement}
      placement={placement}
      placementPrefix={placementPrefix}
      arrowClassName={arrowClassName}
      container={container}
      modifiers={modifiers}
      offset={offset}
      cssModule={cssModule}
    >
      <div
        {...attributes}
        ref={getRef}
        className={classes}
        role="tooltip"
        aria-hidden={isOpen}
        onMouseOver={onMouseOverTooltipContent}
        onMouseLeave={onMouseLeaveTooltipContent}
        onKeyDown={onEscKeyDown}
        ref={innerRef}
      />
    </CPopperContent>
  );

}

CTooltipPopoverWrapper.propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  show: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trigger: PropTypes.string,
};

CTooltipPopoverWrapper.defaultProps = {
  show: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function () {},
  trigger: 'click',
};

export default CTooltipPopoverWrapper;
