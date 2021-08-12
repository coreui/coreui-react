// TODO: check if element is visible after toggle

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
import { CBackdrop } from '../backdrop/CBackdrop'

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
   * Expand narrowed sidebar on hover. [docs]
   */
  unfoldable?: boolean
  /**
   * Toggle the visibility of sidebar component. [docs]
   */
  visible?: boolean
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
      visible,
      ...rest
    },
    ref,
  ) => {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, sidebarRef)
    const [mobile, setMobile] = useState(false)
    const [_visible, setVisible] = useState(visible)

    const isOnMobile = (element: React.RefObject<HTMLDivElement>) =>
      Boolean(
        element.current && getComputedStyle(element.current).getPropertyValue('--cui-is-mobile'),
      )

    useLayoutEffect(() => {
      setMobile(isOnMobile(sidebarRef))
    })

    useEffect(() => {
      setVisible(visible)
      setMobile(isOnMobile(sidebarRef))
    }, [visible])

    useEffect(() => {
      setMobile(isOnMobile(sidebarRef))
      _visible && onShow && onShow()
    }, [_visible])

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
      if (_visible) {
        setVisible(false)
        onHide && onHide()
      }
    }

    const handleKeyup = (event: Event) => {
      if (
        mobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as HTMLElement)
      ) {
        handleHide()
      }
    }
    const handleClickOutside = (event: Event) => {
      if (
        mobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as HTMLElement)
      ) {
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
        show: _visible === true,
        hide: _visible === false,
      },
      className,
    )

    return (
      <>
        <div className={_className} {...rest} ref={forkedRef}>
          {children}
        </div>
        {typeof window !== 'undefined' &&
          mobile &&
          createPortal(
            <CBackdrop className="sidebar-backdrop" visible={_visible} />,
            document.body,
          )}
      </>
    )
  },
)

CSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  overlaid: PropTypes.bool,
  position: PropTypes.oneOf(['fixed', 'sticky']),
  selfHiding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool,
}

CSidebar.displayName = 'CSidebar'
