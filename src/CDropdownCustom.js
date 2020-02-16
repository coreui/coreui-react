import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules, omit, keyCodes, deprecated} from './Shared/helper.js';
import {Manager} from 'react-popper';

export const Context = React.createContext({});

//component - CoreUI / CPopperContentWrapper

class CPopperContentWrapper extends React.Component {

  getChildContext(){
    return this.context;
  }

  render(){
    return this.props.children;
  }

}

CPopperContentWrapper.contextType = Context;

CPopperContentWrapper.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  inNavbar: PropTypes.bool.isRequired
};

//component - CoreUI / CDropdownCustom

const CDropdownCustom = props=>{

  const {
    className,
    cssModule,
    //
    dropup,
    show,
    group,
    size,
    inNav,
    setActiveFromChild,
    active,
    addonType,
    ...attributes
  } = omit(props, ['toggle', 'disabled', 'inNavbar', 'direction']);

  const fields = useRef({
    firstRender: true
  }).current;

  const ref = useRef(null);

  const getContainer = ()=>{
    if (fields._$container) return fields._$container;
    fields._$container = ReactDOM.findDOMNode(ref.current);
    return fields._$container;
  }

  const getMenuCtrl = ()=>{
    if (fields._$menuCtrl) return fields._$menuCtrl;
    fields._$menuCtrl = getContainer().querySelector('[aria-expanded]');
    return fields._$menuCtrl;
  }

  const getMenuItems = ()=>{
    return [].slice.call(getContainer().querySelectorAll('[role="menuitem"]'));
  }

  const addEvents = ()=>{
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, handleDocumentClick, true)
    );
    fields.handleDocumentClick = handleDocumentClick;
  }

  const removeEvents = ()=>{
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, fields.handleDocumentClick, true)
    );
  }

  const handleDocumentClick = e=>{
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
    const container = getContainer();
    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }
    toggle(e);
  }

  const handleKeyDown = e=>{
    if (
      /input|textarea/i.test(e.target.tagName)
      || (keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem')
    ) {
      return;
    }
    e.preventDefault();
    if (fields.disabled) return;
    if (getMenuCtrl() === e.target) {
      if (
        !fields.isOpen
        && ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1)
      ) {
        toggle(e);
        setTimeout(()=>getMenuItems()[0].focus());
      }
    }
    if (fields.isOpen && (e.target.getAttribute('role') === 'menuitem')) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        toggle(e);
        getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        getMenuCtrl().focus();
      } else if (
        [keyCodes.down, keyCodes.up].indexOf(e.which) > -1
        || ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
      ) {
        const $menuitems = getMenuItems();
        let index = $menuitems.indexOf(e.target);
        if (keyCodes.up === e.which || (keyCodes.p === e.which && e.ctrlKey)) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || (keyCodes.n === e.which && e.ctrlKey)) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }
        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        const $menuitems = getMenuItems();
        $menuitems[$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        const $menuitems = getMenuItems();
        $menuitems[0].focus();
      } else if ((e.which >= 48) && (e.which <= 90)) {
        const $menuitems = getMenuItems();
        const charPressed = String.fromCharCode(e.which).toLowerCase();
        for (let i = 0; i < $menuitems.length; i += 1) {
          const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();
          if (firstLetter === charPressed) {
            $menuitems[i].focus();
            break;
          }
        }
      }
    }
  }

  const handleProps = ()=>{
    if (props.show) {
      addEvents();
    } else {
      removeEvents();
    }
  }

  const toggle = e=>{
    if (fields.disabled) {
      return e && e.preventDefault();
    }
    return props.toggle(e);
  }

  //effect

  useEffect(() => {
    if (fields.firstRender){
      return;
    };
    handleProps();
  }, [props.show]);

  useEffect(() => {
    fields.firstRender = false;
    handleProps();
    return function cleanup() {
      removeEvents();
    };
  }, []);

  //render

  fields.disabled = props.disabled;
  fields.isOpen = props.show;

  const direction = (props.direction === 'down' && dropup) ? 'up' : props.direction;

  attributes.tag = attributes.tag || (inNav ? 'li' : 'div');

  let subItemIsActive = false;

  if (setActiveFromChild){
    React.Children.map(props.children[1].props.children,
      (dropdownItem) => {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      }
    );
  }

  const classes = mapToCssModules(classNames(
    className,
    direction !== 'down' && `drop${direction}`,
    inNav && active ? 'active' : false,
    setActiveFromChild && subItemIsActive ? 'active' : false,
    {
      [`input-group-${addonType}`]: addonType,
      'btn-group': group,
      [`btn-group-${size}`]: !!size,
      'dropdown': !group && !addonType,
      'show': show,
      'nav-item': inNav
    }
  ), cssModule);

  return (
    <Context.Provider value={{
      toggle: props.toggle,
      isOpen: props.show,
      direction: (props.direction === 'down' && props.dropup) ? 'up' : props.direction,
      inNavbar: props.inNavbar,
    }}>
      <CPopperContentWrapper>
        <Manager {...attributes} className={classes} onKeyDown={handleKeyDown} ref={ref} />
      </CPopperContentWrapper>
    </Context.Provider>
  );

}

CDropdownCustom.propTypes = {
  tag: tagPropType,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  show: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
  size: PropTypes.string,
  toggle: PropTypes.func,
  inNav: PropTypes.bool,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool,
  dropup: deprecated(PropTypes.bool, 'Please use the prop "direction" with the value "up".')//
};

CDropdownCustom.defaultProps = {
  show: false,
  direction: 'down',
  active: false,
  addonType: false,
  inNav: false,
  inNavbar: false,
  setActiveFromChild: false,
  group: true
};

export default CDropdownCustom;
