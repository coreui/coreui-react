import React, {useState, useRef, useMemo, useEffect} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Context = React.createContext({})

//component - CoreUI / CSidebar

const CSidebar = props=>{

  const {
    children,
    className,
    //
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
    onShowUpdate,
    ...attributes
  } = props

  const key = useState(Math.random().toString(36).substr(2))[0]

  const [isOpen, setIsOpen] = useState(show)

  const node = useRef({}).current
  const reference = (r) => {
    node.current = r
    innerRef && innerRef(r)
  }
  // useEffect(()=>{
  //   compData.reRender = false
  // })


  // compData.nextRender = true

  useMemo(() => {
    setIsOpen(show)
  }, [show])

  useEffect(() => {
    isOpen === true ? createBackdrop() : removeBackdrop()
    return () => removeBackdrop()
  }, [isOpen])

  //methods
  const sidebarCloseListener = (e) => {
    if (
      document.getElementById(key + 'backdrop') &&
      !node.current.contains(e.target)
    ) {
      closeSidebar()
    }
  }

  const createBackdrop = () => {
    const backdrop = document.createElement('div')
    if (overlaid) {
      document.addEventListener('click', sidebarCloseListener, true)
    } else {
      backdrop.addEventListener('click', closeSidebar)
    }
    backdrop.className = 'c-sidebar-backdrop c-show'
    backdrop.id = key + 'backdrop'
    document.body.appendChild(backdrop)
  }

  const removeBackdrop = () => {
    const backdrop = document.getElementById(key + 'backdrop')
    if (backdrop) {
      document.removeEventListener('click', sidebarCloseListener)
      backdrop.removeEventListener('click', closeSidebar)
      document.body.removeChild(backdrop)
    }
  }

  const closeSidebar = () => {
    setIsOpen(overlaid ? false : 'responsive')
    onShowUpdate && onShowUpdate(isOpen)
  }

  const isOnMobile = ()=>{
    return Boolean(getComputedStyle(node.current).getPropertyValue('--is-mobile'))
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
  )

  const state = {
    minimize: minimize && !unfoldable
  }

  return (
    <Context.Provider value={{
      dropdownMode: dropdownMode,
      state
    }}>
      <div
        {...attributes}
        className={classes}
        ref={reference}
        onClick={onSidebarClick}
      >
        {children}
      </div>
    </Context.Provider>
  )

}

CSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  fixed: PropTypes.bool,
  unfoldable: PropTypes.bool,
  overlaid: PropTypes.bool,
  breakpoint: PropTypes.oneOf([false, '', 'sm', 'md', 'lg', 'xl']),
  minimize: PropTypes.bool,
  show: PropTypes.oneOf(['', true, false, 'responsive']),
  size: PropTypes.oneOf(['', 'sm', 'lg', 'xl']),
  hideOnMobileClick: PropTypes.bool,
  aside: PropTypes.bool,
  colorScheme: PropTypes.string,
  dropdownMode: PropTypes.oneOf([
    '', 'openActive', 'close', 'closeInactive', 'noAction'
  ]),
  onShowUpdate: PropTypes.func
}

CSidebar.defaultProps = {
  fixed: true,
  breakpoint: 'lg',
  show: 'responsive',
  hideOnMobileClick: true,
  colorScheme: 'dark',
  dropdownMode: 'openActive',
}

export default CSidebar
