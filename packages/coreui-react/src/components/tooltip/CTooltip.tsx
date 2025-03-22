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

export interface CTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Enables or disables the CSS fade transition for the React Tooltip.
   *
   * @since 4.9.0
   */
  animation?: boolean

  /**
   * Adds a custom class name to the React Tooltip container. Useful for overriding default styles or applying additional design choices.
   */
  className?: string

  /**
   * Appends the React Tooltip to a specific element instead of the default `document.body`. You may pass:
   * - A DOM element (`HTMLElement` or `DocumentFragment`)
   * - A function that returns a single element
   * - `null`
   *
   * @example
   * <CTooltip container={document.getElementById('my-container')}>...</CTooltip>
   *
   * @default document.body
   * @since 4.11.0
   */
  container?: DocumentFragment | Element | (() => DocumentFragment | Element | null) | null

  /**
   * Content to be displayed within the React Tooltip. Can be a string or any valid React node.
   */
  content: ReactNode | string

  /**
   * The delay (in milliseconds) before showing or hiding the React Tooltip.
   * - If provided as a number, the delay is applied to both "show" and "hide".
   * - If provided as an object, it should have distinct "show" and "hide" values.
   *
   * @example
   * // Delays 300ms on both show and hide
   * <CTooltip delay={300}>...</CTooltip>
   *
   * // Delays 500ms on show and 100ms on hide
   * <CTooltip delay={{ show: 500, hide: 100 }}>...</CTooltip>
   *
   * @since 4.9.0
   */
  delay?: number | { show: number; hide: number }

  /**
   * Array of fallback placements for the React Tooltip to use when the preferred placement cannot be achieved. These placements are tried in order.
   *
   * @type 'top', 'right', 'bottom', 'left' | ('top', 'right', 'bottom', 'left')[]
   * @since 4.9.0
   */
  fallbackPlacements?: Placements | Placements[]

  /**
   * Adjusts the offset of the React Tooltip relative to its target. Expects a tuple `[x-axis, y-axis]`.
   *
   * @example
   * // Offset the menu 0px in X and 10px in Y direction
   * <CTooltip offset={[0, 10]}>...</CTooltip>
   *
   * // Offset the menu 5px in both X and Y direction
   * <CTooltip offset={[5, 5]}>...</CTooltip>
   */
  offset?: [number, number]

  /**
   * Callback fired immediately after the React Tooltip is hidden.
   */
  onHide?: () => void

  /**
   * Callback fired immediately after the React Tooltip is shown.
   */
  onShow?: () => void

  /**
   * Initial placement of the React Tooltip. Note that Popper.js modifiers may alter this placement automatically if there's insufficient space in the chosen position.
   */
  placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left'

  /**
   * Customize the Popper.js configuration used to position the React Tooltip. Pass either an object or a function returning a modified config. [Learn more](https://popper.js.org/docs/v2/constructors/#options)
   *
   * @example
   * <CTooltip
   *   popperConfig={(defaultConfig) => ({
   *     ...defaultConfig,
   *     strategy: 'fixed',
   *     modifiers: [
   *       ...defaultConfig.modifiers,
   *       { name: 'computeStyles', options: { adaptive: false } },
   *     ],
   *   })}
   * >...</CTooltip>
   *
   * @since 5.5.0
   */
  popperConfig?: Partial<Options> | ((defaultPopperConfig: Partial<Options>) => Partial<Options>)

  /**
   * Determines the events that toggle the visibility of the React Tooltip. Can be a single trigger or an array of triggers.
   *
   * @example
   * // Hover-only tooltip
   * <CTooltip trigger="hover">...</CTooltip>
   *
   * // Hover + click combined
   * <CTooltip trigger={['hover', 'click']}>...</CTooltip>
   *
   * @type 'hover' | 'focus' | 'click' | ('hover' | 'focus' | 'click')[]
   */
  trigger?: Triggers | Triggers[]

  /**
   * Controls the visibility of the React Tooltip.
   * - `true` to show the tooltip.
   * - `false` to hide the tooltip.
   */
  visible?: boolean
}

export const CTooltip = forwardRef<HTMLDivElement, CTooltipProps>(
  (
    {
      children,
      animation = true,
      className,
      container,
      content,
      delay = 0,
      fallbackPlacements = ['top', 'right', 'bottom', 'left'],
      offset = [0, 6],
      onHide,
      onShow,
      placement = 'top',
      popperConfig,
      trigger = ['hover', 'focus'],
      visible,
      ...rest
    },
    ref
  ) => {
    const tooltipRef = useRef<HTMLDivElement>(null)
    const togglerRef = useRef(null)
    const forkedRef = useForkedRef(ref, tooltipRef)

    const id = `tooltip${useId()}`
    const [mounted, setMounted] = useState(false)
    const [_visible, setVisible] = useState(visible)

    const { initPopper, destroyPopper, updatePopper } = usePopper()

    const _delay = typeof delay === 'number' ? { show: delay, hide: delay } : delay

    const defaultPopperConfig: Partial<Options> = {
      modifiers: [
        { name: 'arrow', options: { element: '.tooltip-arrow' } },
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
      if (mounted && togglerRef.current && tooltipRef.current) {
        initPopper(togglerRef.current, tooltipRef.current, computedPopperConfig)
        setTimeout(() => {
          setVisible(true)
        }, _delay.show)

        return
      }

      if (!mounted && togglerRef.current && tooltipRef.current) {
        destroyPopper()
      }
    }, [mounted])

    useEffect(() => {
      if (!_visible && togglerRef.current && tooltipRef.current) {
        executeAfterTransition(() => {
          setMounted(false)
        }, tooltipRef.current)
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

    useEffect(() => {
      updatePopper()
    }, [content])

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
                'tooltip',
                'bs-tooltip-auto',
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
              <div className="tooltip-arrow"></div>
              <div className="tooltip-inner">{content}</div>
            </div>
          )}
        </CConditionalPortal>
      </>
    )
  }
)

CTooltip.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
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
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
