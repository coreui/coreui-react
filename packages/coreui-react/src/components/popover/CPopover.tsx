import React, { FC, HTMLAttributes, ReactNode, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

import { usePopper } from '../../hooks'
import { fallbackPlacementsPropType, triggerPropType } from '../../props'
import type { Placements, Triggers } from '../../types'
import { getRTLPlacement } from '../../utils'

export interface CPopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'content'> {
  /**
   * Apply a CSS fade transition to the popover.
   *
   * @since 4.9.0
   */
  animation?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Content node for your component.
   */
  content: ReactNode | string
  /**
   * Offset of the popover relative to its target.
   */
  offset?: [number, number]
  /**
   * The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: `{ 'show': 500, 'hide': 100 }`.
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
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Title node for your component.
   */
  title?: ReactNode | string
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
   * Toggle the visibility of popover component.
   */
  visible?: boolean
}

export const CPopover: FC<CPopoverProps> = ({
  children,
  animation = true,
  className,
  content,
  delay = 0,
  fallbackPlacements = ['top', 'right', 'bottom', 'left'],
  offset = [0, 8],
  onHide,
  onShow,
  placement = 'top',
  title,
  trigger = 'click',
  visible,
  ...rest
}) => {
  const popoverRef = useRef(null)
  const togglerRef = useRef(null)
  const { initPopper, destroyPopper } = usePopper()
  const [_visible, setVisible] = useState(visible)

  const _delay = typeof delay === 'number' ? { show: delay, hide: delay } : delay

  const popperConfig = {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: '.popover-arrow',
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
    if (_visible && togglerRef.current && popoverRef.current) {
      initPopper(togglerRef.current, popoverRef.current, popperConfig)
    }

    return () => {
      destroyPopper()
    }
  }, [_visible])

  const toggleVisible = (visible: boolean) => {
    if (visible) {
      setTimeout(() => setVisible(true), _delay.show)
      return
    }

    setTimeout(() => setVisible(false), _delay.hide)
  }

  return (
    <>
      {React.cloneElement(children as React.ReactElement<any>, {
        ref: togglerRef,
        ...((trigger === 'click' || trigger.includes('click')) && {
          onClick: () => toggleVisible(!_visible),
        }),
        ...((trigger === 'focus' || trigger.includes('focus')) && {
          onFocus: () => toggleVisible(true),
          onBlur: () => toggleVisible(false),
        }),
        ...((trigger === 'hover' || trigger.includes('hover')) && {
          onMouseEnter: () => toggleVisible(true),
          onMouseLeave: () => toggleVisible(false),
        }),
      })}
      {typeof window !== 'undefined' &&
        createPortal(
          <Transition
            in={_visible}
            mountOnEnter
            nodeRef={popoverRef}
            onEnter={onShow}
            onExit={onHide}
            timeout={{
              enter: 0,
              exit: 200,
            }}
            unmountOnExit
          >
            {(state) => (
              <div
                className={classNames(
                  'popover',
                  'bs-popover-auto',
                  {
                    fade: animation,
                    show: state === 'entered',
                  },
                  className,
                )}
                ref={popoverRef}
                role="tooltip"
                {...rest}
              >
                <div className="popover-arrow"></div>
                <div className="popover-header">{title}</div>
                <div className="popover-body">{content}</div>
              </div>
            )}
          </Transition>,
          document.body,
        )}
    </>
  )
}

CPopover.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CPopover.displayName = 'CPopover'
