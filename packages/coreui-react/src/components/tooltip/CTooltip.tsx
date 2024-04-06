import React, { forwardRef, HTMLAttributes, ReactNode, useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { CConditionalPortal } from '../conditional-portal'
import { useForkedRef, usePopper } from '../../hooks'
import { fallbackPlacementsPropType, triggerPropType } from '../../props'
import type { Placements, Triggers } from '../../types'
import { executeAfterTransition, getRTLPlacement } from '../../utils'

export interface CTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Apply a CSS fade transition to the tooltip.
   *
   * @since 4.9.0
   */
  animation?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Appends the react tooltip to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`.
   *
   * @since v4.11.0
   */
  container?: Element | (() => Element | null) | null
  /**
   * Content node for your component.
   */
  content: ReactNode | string
  /**
   * The delay for displaying and hiding the tooltip (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: `{ 'show': 500, 'hide': 100 }`.
   *
   * @since 4.9.0
   */
  delay?: number | { show: number; hide: number }
  /**
   * Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference.
   *
   * @since 4.9.0
   */
  fallbackPlacements?: Placements | Placements[]
  /**
   * Offset of the tooltip relative to its target.
   */
  offset?: [number, number]
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   *
   * @type 'hover' | 'focus' | 'click'
   */
  trigger?: Triggers | Triggers[]
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   */
  placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * Toggle the visibility of tooltip component.
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
      trigger = ['hover', 'focus'],
      visible,
      ...rest
    },
    ref,
  ) => {
    const tooltipRef = useRef<HTMLDivElement>(null)
    const togglerRef = useRef(null)
    const forkedRef = useForkedRef(ref, tooltipRef)
    const uID = useRef(`tooltip${Math.floor(Math.random() * 1_000_000)}`)

    const { initPopper, destroyPopper, updatePopper } = usePopper()
    const [mounted, setMounted] = useState(false)
    const [_visible, setVisible] = useState(visible)

    const _delay = typeof delay === 'number' ? { show: delay, hide: delay } : delay

    const popperConfig = {
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: '.tooltip-arrow',
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: fallbackPlacements,
          },
        },
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
      ],
      placement: getRTLPlacement(placement, togglerRef.current),
    }

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    useEffect(() => {
      if (_visible) {
        setMounted(true)

        if (tooltipRef.current) {
          tooltipRef.current.classList.remove('fade', 'show')
          destroyPopper()
        }

        setTimeout(() => {
          if (togglerRef.current && tooltipRef.current) {
            if (animation) {
              tooltipRef.current.classList.add('fade')
            }

            initPopper(togglerRef.current, tooltipRef.current, popperConfig)
            tooltipRef.current.classList.add('show')
            onShow && onShow()
          }
        }, _delay.show)
      }

      return () => {
        if (tooltipRef.current) {
          tooltipRef.current.classList.remove('show')
          onHide && onHide()
          executeAfterTransition(() => {
            destroyPopper()
            setMounted(false)
          }, tooltipRef.current)
        }
      }
    }, [_visible])

    useEffect(() => {
      updatePopper()
    }, [content])

    return (
      <>
        {React.cloneElement(children as React.ReactElement<any>, {
          ...(_visible && {
            'aria-describedby': uID.current,
          }),
          ref: togglerRef,
          ...((trigger === 'click' || trigger.includes('click')) && {
            onClick: () => setVisible(!_visible),
          }),
          ...((trigger === 'focus' || trigger.includes('focus')) && {
            onFocus: () => setVisible(true),
            onBlur: () => setVisible(false),
          }),
          ...((trigger === 'hover' || trigger.includes('hover')) && {
            onMouseEnter: () => setVisible(true),
            onMouseLeave: () => setVisible(false),
          }),
        })}
        <CConditionalPortal container={container} portal={true}>
          {mounted && (
            <div
              className={classNames('tooltip', 'bs-tooltip-auto', className)}
              id={uID.current}
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
  },
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
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
