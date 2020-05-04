import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { Context } from './CSidebar'
//component - CoreUI / CSidebarNav

const CSidebarNav = props => {

  const {
    className,
    //
    innerRef,
    ...attributes
  } = props;

  const { scrollbarExist } = useContext(Context)

  const navClasses = classNames('c-sidebar-nav', 'h-100', className)

  //state

  const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl'
  return !scrollbarExist ?
    <ul className={navClasses} {...attributes} ref={innerRef}>
      {props.children}
    </ul> : 
    <PerfectScrollbar 
      options={{ suppressScrollX: !isRtl }} 
      className={navClasses} 
      ref={innerRef} 
      component="ul" 
      {...attributes}
    />
}

CSidebarNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
};

export default CSidebarNav
