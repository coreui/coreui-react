// TODO: check if element is visible after toggle

import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  // useLayoutEffect,
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
  hideBelow?: Breakpoints | boolean | number
  /**
   * Make sidebar narrow. [docs]
   */
  narrow?: boolean
  /**
   * Method called before the show animation has started. [docs]
   */
  onVisibleChange?: (visible: boolean) => void
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
   * Size the component small, large, or extra large. [docs]
   */
  size?: 'sm' | 'lg' | 'xl'
  /**
   * Expand narrowed sidebar on hover. [docs]
   */
  unfoldable?: boolean
  /**
   * Toggle the visibility of sidebar component. [docs]
   *
   * @default true
   */
  visible?: boolean
  /**
   * Toggle the visibility of sidebar component. [docs]
   *
   * @default false
   */
  hideOnMobile?: boolean
}

export const CSidebar = forwardRef<HTMLDivElement, CSidebarProps>(
  (
    {
      children,
      className,
      hideBelow,
      hideOnMobile = true,
      narrow,
      onVisibleChange,
      overlaid,
      position,
      selfHiding,
      size,
      unfoldable,
      visible,
      ...rest
    },
    ref,
  ) => {
    const getWidth = () =>
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    const sidebarRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, sidebarRef)
    const [mobile, setMobile] = useState(false)
    const [_visible, setVisible] = useState(visible)
    const [width, setWidth] = useState(getWidth())

    const getHideBelowBreakpoint = (element: React.RefObject<HTMLDivElement>) =>
      element.current &&
      getComputedStyle(element.current).getPropertyValue(`--cui-breakpoint-${hideBelow}`)

    // const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    //   const [entry] = entries
    //   onVisibleChange && onVisibleChange(entry.isIntersecting)
    // }

    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // }

    useEffect(() => {
      const { current } = sidebarRef
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          const [entry] = entries
          onVisibleChange && onVisibleChange(entry.isIntersecting)
        },
        {
          rootMargin: '0px',
          threshold: 1.0,
        },
      )

      current && observer.observe(current)

      return () => {
        current && observer.unobserve(current)
        observer.disconnect()
      }
    }, [sidebarRef])

    const isOnMobile = (element: React.RefObject<HTMLDivElement>) =>
      Boolean(
        element.current && getComputedStyle(element.current).getPropertyValue('--cui-is-mobile'),
      )

    useEffect(() => {
      const resizeListener = () => {
        setWidth(getWidth())
      }
      window.addEventListener('resize', resizeListener)

      return () => {
        window.removeEventListener('resize', resizeListener)
      }
    }, [sidebarRef])

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    useEffect(() => {
      mobile && hideOnMobile && setVisible(false)
    }, [mobile])

    useEffect(() => {
      sidebarRef.current && setMobile(isOnMobile(sidebarRef))
      hideBelow &&
        sidebarRef.current &&
        Number(getHideBelowBreakpoint(sidebarRef)?.replace('px', '')) > width &&
        visible !== true &&
        setVisible(false)
      hideBelow &&
        sidebarRef.current &&
        Number(getHideBelowBreakpoint(sidebarRef)?.replace('px', '')) <= width &&
        setVisible(true)
    }, [width])

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
        [`sidebar-${size}`]: size,
        'sidebar-narrow-unfoldable': unfoldable,
        hide: !visible || !_visible,
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
  hideBelow: PropTypes.any,
  narrow: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  overlaid: PropTypes.bool,
  position: PropTypes.oneOf(['fixed', 'sticky']),
  selfHiding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool,
  hideOnMobile: PropTypes.bool,
}

CSidebar.displayName = 'CSidebar'
