import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {omit, findDOMElements, defaultToggleEvents, addMultipleEventListeners} from './Shared/helper.js';
import CCollapseCustom from './CCollapseCustom';

//component - CoreUI / CCollapse

const omitKeys = ['toggleEvents', 'defaultOpen', 'custom'];

const CCollapse = props=>{

  let {
    custom,
    //
    toggle,
    show
  } = props;

  const [isOpen, setIsOpen] = useState(props.defaultOpen || false);

  const fields = useRef({
    togglers: null,
    removeEventListeners: null
  }).current;

  if (!custom){
    show = isOpen;
    const userToggle = toggle;
    toggle = e=>{
      setIsOpen(!isOpen);
      e.preventDefault();
      if (userToggle)
        userToggle(e);
    }
  }

  //effect

  useEffect(() => {
    if (custom)
      return;
    fields.togglers = findDOMElements(props.toggler);
    if (fields.togglers.length) {
      fields.removeEventListeners = addMultipleEventListeners(
        fields.togglers,
        toggle,
        props.toggleEvents
      );
    }
    return function cleanup() {
      if (fields.togglers.length && fields.removeEventListeners) {
        fields.removeEventListeners();
      }
    };
  });

  //render

  return <CCollapseCustom show={show} {...omit(props, omitKeys)} />;

}

CCollapse.propTypes = {
  ...CCollapseCustom.propTypes,
  //
  custom: PropTypes.bool,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  defaultOpen: PropTypes.bool,
  toggler: PropTypes.string,
  toggleEvents: PropTypes.arrayOf(PropTypes.string),
  toggle: PropTypes.func,
  show: PropTypes.bool
};

CCollapse.defaultProps = {
  ...CCollapseCustom.defaultProps,
  toggleEvents: defaultToggleEvents,
  custom: true
};

export default CCollapse;
