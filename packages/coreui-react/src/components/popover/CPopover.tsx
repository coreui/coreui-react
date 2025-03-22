import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import type { Options } from '@popperjs/core'

import { CConditionalPortal } from '../conditional-portal'
import { useForkedRef, usePopper } from '../../hooks'
import { fallbackPlacementsPropType, triggerPropType } from '../../props'
import type { Placements, Triggers } from '../../types'
import { executeAfterTransition, getRTLPlacement } from '../../utils'

export interface CPopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'> {
  /**
   * Adds a fade transition animation to the React Popover.
   *
   * @since 4.9.0
   */
  animation?: boolean

  /**
   * Custom class name(s) for additional styling.
   */
  className?: string

  /**
   * Defines the container element to which the React Popover is appended.
   * Accepts:
   * - A DOM element (`HTMLElement` or `DocumentFragment`)
   * - A function that returns a single element
   * - `null` (defaults to `document.body`)
   *
   * @example
   * <CPopover container={document.getElementById('my-container')}>...</CPopover>
   *
   * @default document.body
   * @since 4.11.0
   */
  container?: DocumentFragment | Element | (() => DocumentFragment | Element | null) | null

  /**
   * Main content of the React Popover. It can be a string or any valid React node.
   */
  content: ReactNode | string

  /**
   * Delay (in milliseconds) before showing or hiding the React Popover.
   * - If a number is provided, that delay applies to both "show" and "hide".
   * - If an object is provided, use separate values for "show" and "hide".
   *
   * @example
   * // Delays 300ms on both show and hide
   * <CPopover delay={300}>...</CPopover>
   *
   * // Delays 500ms on show and 100ms on hide
   * <CPopover delay={{ show: 500, hide: 100 }}>...</CPopover>
   *
   * @since 4.9.0
   */
  delay?: number | { show: number; hide: number }

  /**
   * Specifies the fallback placements when the preferred `placement` cannot be met.
   *
   * @type 'top', 'right', 'bottom', 'left' | ('top', 'right', 'bottom', 'left')[]
   * @since 4.9.0
   */
  fallbackPlacements?: Placements | Placements[]

  /**
   * Offset of the React Popover relative to its toggle element, in the form `[x, y]`.
   *
   * @example
   * // Offset the menu 0px in X and 10px in Y direction
   * <CPopover offset={[0, 10]}>...</CPopover>
   *
   * // Offset the menu 5px in both X and Y direction
   * <CPopover offset={[5, 5]}>...</CPopover>
   */
  offset?: [number, number]

  /**
   * Invoked when the React Popover is about to hide.
   */
  onHide?: () => void

  /**
   * Invoked when the React Popover is about to show.
   */
  onShow?: () => void

  /**
   * Placement of the React Popover. Popper.js may override this based on available space.
   */
  placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left'

  /**
   * Allows customization of the Popper.js configuration for the React Popover.
   * Can be an object or a function returning a modified configuration.
   * [Learn more](https://popper.js.org/docs/v2/constructors/#options)
   *
   * @example
   * <CPopover
   *   popperConfig={(defaultConfig) => ({
   *     ...defaultConfig,
   *     strategy: 'fixed',
   *     modifiers: [
   *       ...defaultConfig.modifiers,
   *       { name: 'computeStyles', options: { adaptive: false } },
   *     ],
   *   })}
   * >...</CPopover>
   *
   * @since 5.5.0
   */
  popperConfig?: Partial<Options> | ((defaultPopperConfig: Partial<Options>) => Partial<Options>)

  /**
   * Title for the React Popover header. Can be a string or any valid React node.
   */
  title?: ReactNode | string

  /**
   * Determines which events trigger the visibility of the React Popover. Can be a single trigger or an array of triggers.
   *
   * @example
   * // Hover-only popover
   * <CPopover trigger="hover">...</CPopover>
   *
   * // Hover + click combined
   * <CPopover trigger={['hover', 'click']}>...</CPopover>
   *
   * @type 'hover' | 'focus' | 'click' | ('hover' | 'focus' | 'click')[]
   */
  trigger?: Triggers | Triggers[]

  /**
   * Controls the visibility of the React Popover.
   * - `true` shows the popover.
   * - `false` hides the popover.
   */
  visible?: boolean
}

export const CPopover = forwardRef<HTMLDivElement, CPopoverProps>(
  (
    {
      children,
      animation = true,
      className,
      container,
      content,
      delay = 0,
      fallbackPlacements = ['top', 'right', 'bottom', 'left'],
      offset = [0, 8],
      onHide,
      onShow,
      placement = 'top',
      popperConfig,
      title,
      trigger = 'click',
      visible,
      ...rest
    },
    ref
  ) => {
    const popoverRef = useRef<HTMLDivElement>(null)
    const togglerRef = useRef(null)
    const forkedRef = useForkedRef(ref, popoverRef)

    const id = `popover${useId()}`
    const [mounted, setMounted] = useState(false)
    const [_visible, setVisible] = useState(visible)

    const { initPopper, destroyPopper } = usePopper()

    const _delay = typeof delay === 'number' ? { show: delay, hide: delay } : delay

    const defaultPopperConfig: Partial<Options> = {
      modifiers: [
        { name: 'arrow', options: { element: '.popover-arrow' } },
        { name: 'flip', options: { fallbackPlacements } },
        { name: 'offset', options: { offset } },
      ],
      placement: getRTLPlacement(placement, togglerRef.current),
    }

    const computedPopperConfig: Partial<Options> = {
      ...defaultPopperConfig,
      ...(typeof popperConfig === 'function' ? popperConfig(defaultPopperConfig) : popperConfig),
    }

    useEffect(() => {
      if (visible) {
        handleShow()
        return
      }

      handleHide()
    }, [visible])

    useEffect(() => {
      if (mounted && togglerRef.current && popoverRef.current) {
        initPopper(togglerRef.current, popoverRef.current, computedPopperConfig)
        setTimeout(() => {
          setVisible(true)
        }, _delay.show)

        return
      }

      if (!mounted && togglerRef.current && popoverRef.current) {
        destroyPopper()
      }
    }, [mounted])

    useEffect(() => {
      if (!_visible && togglerRef.current && popoverRef.current) {
        executeAfterTransition(() => {
          setMounted(false)
        }, popoverRef.current)
      }
    }, [_visible])

    const handleShow = () => {
      setMounted(true)
      if (onShow) {
        onShow()
      }
    }

    const handleHide = () => {
      setTimeout(() => {
        setVisible(false)
        if (onHide) {
          onHide()
        }
      }, _delay.hide)
    }

    return (
      <>
        {React.cloneElement(children as React.ReactElement<any>, {
          ...(_visible && {
            'aria-describedby': id,
          }),
          ref: togglerRef,
          ...((trigger === 'click' || trigger.includes('click')) && {
            onClick: () => (_visible ? handleHide() : handleShow()),
          }),
          ...((trigger === 'focus' || trigger.includes('focus')) && {
            onFocus: () => handleShow(),
            onBlur: () => handleHide(),
          }),
          ...((trigger === 'hover' || trigger.includes('hover')) && {
            onMouseEnter: () => handleShow(),
            onMouseLeave: () => handleHide(),
          }),
        })}
        <CConditionalPortal container={container} portal={true}>
          {mounted && (
            <div
              className={classNames(
                'popover',
                'bs-popover-auto',
                {
                  fade: animation,
                  show: _visible,
                },
                className
              )}
              id={id}
              ref={forkedRef}
              role="tooltip"
              {...rest}
            >
              <div className="popover-arrow"></div>
              <div className="popover-header">{title}</div>
              <div className="popover-body">{content}</div>
            </div>
          )}
        </CConditionalPortal>
      </>
    )
  }
)

CPopover.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.any,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number.isRequired,
      hide: PropTypes.number.isRequired,
    }),
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  popperConfig: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CPopover.displayName = 'CPopover'
