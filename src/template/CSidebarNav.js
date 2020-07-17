import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CScrollbar from './CScrollbar'
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
  return <CScrollbar
    settings={{ suppressScrollX: !isRtl }} 
    className={navClasses} 
    innerRef={innerRef}
    switcher={scrollbarExist}
    tag="ul" 
    {...attributes}
  />
}

CSidebarNav.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  children: PropTypes.node,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default CSidebarNav
