import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Breakpoints } from '../Types'
import { useForkedRef } from '../../utils/hooks'

export interface CSidebarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Make sidebar narrow. [docs]
   */
  narrow?: boolean
  /**
   * Method called before the hide animation has started. [docs]
   */
  onHide?: () => void
  /**
   * Method called before the show animation has started. [docs]
   */
  onShow?: () => void
  /**
   * Set sidebar to narrow variant. [docs]
   */
  overlaid?: boolean
  /**
   * Place sidebar in non-static positions. [docs]
   */
  position?: 'fixed' | 'sticky'
  /**
   * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to. [docs]
   */
  selfHiding?: Breakpoints | boolean
  /**
   * Show self hidden sidebar. [docs]
   */
  show?: boolean
  /**
   * Expand narrowed sidebar on hover. [docs]
   */
  unfoldable?: boolean
}

export const CSidebar = forwardRef<HTMLDivElement, CSidebarProps>(
  (
    {
      children,
      className,
      narrow,
      onHide,
      onShow,
      overlaid,
      position,
      selfHiding,
      unfoldable,
      show,
      ...rest
    },
    ref,
  ) => {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, sidebarRef)
    const [_show, setShow] = useState(show)
    const [mobile, setMobile] = useState(false)

    const isOnMobile = (element: React.RefObject<HTMLDivElement>) =>
      Boolean(
        element.current && getComputedStyle(element.current).getPropertyValue('--cui-is-mobile'),
      )

    useLayoutEffect(() => {
      setMobile(isOnMobile(sidebarRef))
    })

    useEffect(() => {
      setShow(show)
      setMobile(isOnMobile(sidebarRef))
    }, [show])

    useEffect(() => {
      setMobile(isOnMobile(sidebarRef))
      _show && onShow && onShow()
    }, [_show])

    useEffect(() => {
      window.addEventListener('mouseup', handleClickOutside)
      sidebarRef.current && sidebarRef.current.addEventListener('mouseup', handleOnClick)
      window.addEventListener('keyup', handleKeyup)

      return () => {
        window.removeEventListener('mouseup', handleClickOutside)
        sidebarRef.current && sidebarRef.current.removeEventListener('mouseup', handleOnClick)
        window.removeEventListener('keyup', handleKeyup)
      }
    })

    const handleHide = () => {
      if (_show) {
        setShow(false)
        onHide && onHide()
      }
    }

    const handleKeyup = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as HTMLElement)) {
        handleHide()
      }
    }
    const handleClickOutside = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as HTMLElement)) {
        handleHide()
      }
    }

    const handleOnClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement
      target &&
        target.classList.contains('nav-link') &&
        !target.classList.contains('nav-group-toggle') &&
        mobile &&
        handleHide()
    }

    const _className = classNames(
      'sidebar',
      {
        'sidebar-narrow': narrow,
        'sidebar-overlaid': overlaid,
        [`sidebar-${position}`]: position,
        [`sidebar-self-hiding${typeof selfHiding !== 'boolean' && '-' + selfHiding}`]: selfHiding,
        'sidebar-narrow-unfoldable': unfoldable,
        show: _show,
      },
      className,
    )

    return (
      <>
        <div className={_className} {...rest} ref={forkedRef}>
          {children}
        </div>
        {typeof window !== 'undefined' &&
          createPortal(
            mobile && _show && <div className="sidebar-backdrop fade show"></div>,
            document.body,
          )}
      </>
    )
  },
)

CSidebar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  overlaid: PropTypes.bool,
  position: PropTypes.oneOf(['fixed', 'sticky']),
  selfHiding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  show: PropTypes.bool,
  unfoldable: PropTypes.bool,
}

CSidebar.displayName = 'CSidebar'
