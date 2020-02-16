import React, {useState, useRef, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {sidebarCssClasses} from './Shared';
import ClickOutHandler from 'react-onclickout'
import './Shared/element-closest'

export const Context = React.createContext({});

//component - CoreUI / CSidebar

const CSidebar = props=>{

  const {
    tag: Tag,
    children,
    className,
    innerRef,
    breakpoint,
    show,
    fixed,
    unfoldable,
    minimize,
    size,
    hideOnMobileClick,
    aside,
    colorScheme,
    overlaid,
    dropdownMode,
    onChange,
    ...attributes
  } = props;

  const [isOpen, setIsOpen] = useState(show);
  const compData = useRef({reRender:false}).current;
  const ref = useRef();

  //methods

  const closeSidebar = ()=>{
    setIsOpen('responsive');
    onChange && onChange('close');
  }
  const isOnMobile = ()=>{
    return Boolean(getComputedStyle(ref.current).getPropertyValue('--is-mobile'))
  }
  const onSidebarClick = (e)=>{
    const hiddingElementClicked = e.target.className.includes && e.target.className.includes('c-sidebar-nav-link')
    if (
      hiddingElementClicked &&
      hideOnMobileClick &&
      isOnMobile()
    ) {
      closeSidebar()
    }
  }
  const onClickOut = e=>{
    if (compData.reRender){
      return;
    }
    closeSidebar()
  }

  useMemo(()=>{
    if (compData.nextRender){
      compData.reRender = true;
      setIsOpen(show);
    }
  },[show]);

  useEffect(()=>{
    compData.reRender = false;
  })


  compData.nextRender = true;

  //console.log(isOpen);

  // render

  const haveResponsiveClass = breakpoint && isOpen === 'responsive'
  const classes = classNames(
    className,
    'c-sidebar',
    colorScheme ? `c-sidebar-${colorScheme}` : null,
    isOpen===true ? 'c-sidebar-show' : null,
    haveResponsiveClass ? `c-sidebar-${breakpoint}-show` : null,
    fixed && !overlaid ? 'c-sidebar-fixed' : null,
    aside ? 'c-sidebar-right' : null,
    minimize && !unfoldable ? 'c-sidebar-minimized' : null,
    minimize && unfoldable ? 'c-sidebar-unfoldable' : null,
    overlaid ? 'c-sidebar-overlaid' : null,
    size ? `c-sidebar-${size}` : null
  );

  const clickOutClasses = classNames(
    'c-sidebar-backdrop',
    isOpen ? 'd-show' : 'd-none'
  );
  const style = {
    background: isOpen? 'black' : 'white'
  }

  const state = {
    minimize: minimize && !unfoldable
  }

  if (isOpen)
    return (
      <ClickOutHandler onClickOut={onClickOut}>
        <Context.Provider value={{
          dropdownMode: dropdownMode,
          state
        }}>
          <Tag {...attributes} className={classes} ref={ref} onClick={onSidebarClick}>
            {children}
          </Tag>
        </Context.Provider>
      </ClickOutHandler>
    );
  else
    return (
      <Context.Provider value={{
        dropdownMode: dropdownMode,
        state
      }}>
        <Tag {...attributes} className={classes} ref={ref} onClick={onSidebarClick}>
          {children}
        </Tag>
      </Context.Provider>
    );

}

CSidebar.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fixed: PropTypes.bool,
  unfoldable: PropTypes.bool,
  overlaid: PropTypes.bool,
  breakpoint: PropTypes.oneOf([false, '', 'sm', 'md', 'lg', 'xl']),
  minimize: PropTypes.bool,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  hideOnMobileClick: PropTypes.bool,
  aside: PropTypes.bool,
  colorScheme: PropTypes.string,
  dropdownMode: PropTypes.oneOf(['', 'openActive', 'close', 'closeInactive', 'noAction']),
  onChange: PropTypes.func
};

CSidebar.defaultProps = {
  tag: 'div',
  fixed: true,
  breakpoint: 'lg',
  show: 'responsive',
  hideOnMobileClick: true,
  colorScheme: 'dark',
  dropdownMode: 'openActive',
};

export default CSidebar;
