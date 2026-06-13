import React, { ElementType, forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CBackdrop } from '../backdrop'

import { isInViewport } from '../../utils'
import { useForkedRef } from '../../hooks'
import { PolymorphicRefForwardingComponent } from '../../helpers'

export interface CSidebarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  as?: ElementType
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets if the color of text should be colored for a light or dark dark background.
   *
   * @type 'dark' | 'light'
   */
  colorScheme?: 'dark' | 'light'
  /**
   * Make sidebar narrow.
   */
  narrow?: boolean
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Event emitted after visibility of component changed.
   */
  onVisibleChange?: (visible: boolean) => void
  /**
   * Set sidebar to overlaid variant.
   */
  overlaid?: boolean
  /**
   * Components placement, there’s no default placement.
   * @type 'start' | 'end'
   */
  placement?: 'start' | 'end'
  /**
   * Place sidebar in non-static positions.
   */
  position?: 'fixed' | 'sticky'
  /**
   * Size the component small, large, or extra large.
   */
  size?: 'sm' | 'lg' | 'xl'
  /**
   * Expand narrowed sidebar on hover.
   */
  unfoldable?: boolean
  /**
   * Toggle the visibility of sidebar component.
   */
  visible?: boolean
}

const isOnMobile = (element: HTMLDivElement) =>
  Boolean(getComputedStyle(element).getPropertyValue('--cui-is-mobile'))

export const CSidebar: PolymorphicRefForwardingComponent<'div', CSidebarProps> = forwardRef<
  HTMLDivElement,
  CSidebarProps
>(
  (
    {
      children,
      as: Component = 'div',
      className,
      colorScheme,
      narrow,
      onHide,
      onShow,
      onVisibleChange,
      overlaid,
      placement,
      position,
      size,
      unfoldable,
      visible,
      ...rest
    },
    ref
  ) => {
    const sidebarRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, sidebarRef)

    const [inViewport, setInViewport] = useState<boolean>()
    const [mobile, setMobile] = useState(false)
    const [visibleMobile, setVisibleMobile] = useState<boolean>(false)
    const [visibleDesktop, setVisibleDesktop] = useState<boolean>(
      visible === undefined ? !overlaid : visible
    )

    useEffect(() => {
      if (sidebarRef.current) {
        setMobile(isOnMobile(sidebarRef.current))
      }

      if (visible !== undefined) {
        handleVisibleChange(visible)
      }
    }, [visible])

    useEffect(() => {
      if (inViewport !== undefined) {
        onVisibleChange?.(inViewport)
      }

      if (inViewport) {
        onShow?.()
      } else {
        onHide?.()
      }
    }, [inViewport])

    useEffect(() => {
      if (mobile) {
        setVisibleMobile(false)
      }
    }, [mobile])

    useEffect(() => {
      const element = sidebarRef.current

      if (element) {
        setMobile(isOnMobile(element))
        setInViewport(isInViewport(element))
      }

      const handleTransitionEnd = () => {
        if (element) {
          setInViewport(isInViewport(element))
        }
      }

      window.addEventListener('resize', handleResize)
      window.addEventListener('mouseup', handleClickOutside)
      window.addEventListener('keyup', handleKeyup)

      element?.addEventListener('mouseup', handleOnClick)
      element?.addEventListener('transitionend', handleTransitionEnd)

      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mouseup', handleClickOutside)
        window.removeEventListener('keyup', handleKeyup)

        element?.removeEventListener('mouseup', handleOnClick)
        element?.removeEventListener('transitionend', handleTransitionEnd)
      }
    })

    const handleVisibleChange = (visible: boolean) => {
      if (mobile) {
        setVisibleMobile(visible)
        return
      }

      setVisibleDesktop(visible)
    }

    const handleHide = () => {
      handleVisibleChange(false)
    }

    const handleResize = () => {
      if (sidebarRef.current) {
        setMobile(isOnMobile(sidebarRef.current))
        setInViewport(isInViewport(sidebarRef.current))
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

      if (
        target &&
        target.classList.contains('nav-link') &&
        !target.classList.contains('nav-group-toggle') &&
        mobile
      ) {
        handleHide()
      }
    }

    return (
      <>
        <Component
          className={classNames(
            'sidebar',
            {
              [`sidebar-${colorScheme}`]: colorScheme,
              'sidebar-narrow': narrow,
              'sidebar-overlaid': overlaid,
              [`sidebar-${placement}`]: placement,
              [`sidebar-${position}`]: position,
              [`sidebar-${size}`]: size,
              'sidebar-narrow-unfoldable': unfoldable,
              show: (mobile && visibleMobile) || (overlaid && visibleDesktop),
              hide: visibleDesktop === false && !mobile && !overlaid,
            },
            className
          )}
          {...rest}
          ref={forkedRef}
        >
          {children}
        </Component>
        {typeof window !== 'undefined' &&
          mobile &&
          createPortal(
            <CBackdrop className="sidebar-backdrop" visible={mobile && visibleMobile} />,
            document.body
          )}
      </>
    )
  }
)

CSidebar.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  colorScheme: PropTypes.oneOf(['dark', 'light']),
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  onVisibleChange: PropTypes.func,
  overlaid: PropTypes.bool,
  placement: PropTypes.oneOf(['start', 'end']),
  position: PropTypes.oneOf(['fixed', 'sticky']),
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool,
}

CSidebar.displayName = 'CSidebar'
