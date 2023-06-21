import React, { FC, HTMLAttributes, ReactNode, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { Placement } from '@popperjs/core'

import { usePopper } from '../../hooks'
import { triggerPropType } from '../../props'
import type { Triggers } from '../../types'
import { isRTL } from '../../utils'

export interface CTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Apply a CSS fade transition to the tooltip.
   *
   * @since 4.9.0-beta.1
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

const getPlacement = (placement: string, element: HTMLDivElement | null): Placement => {
  switch (placement) {
    case 'right': {
      return isRTL(element) ? 'left' : 'right'
    }
    case 'left': {
      return isRTL(element) ? 'right' : 'left'
    }
    default: {
      return placement as Placement
    }
  }
}

export const CTooltip: FC<CTooltipProps> = ({
  children,
  animation = true,
  className,
  content,
  offset = [0, 6],
  onHide,
  onShow,
  placement = 'top',
  trigger = ['hover', 'focus'],
  visible,
  ...rest
}) => {
  const tooltipRef = useRef(null)
  const togglerRef = useRef(null)
  const { initPopper, destroyPopper } = usePopper()
  const [_visible, setVisible] = useState(visible)

  const popperConfig = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset,
        },
      },
    ],
    placement: getPlacement(placement, togglerRef.current),
  }

  useEffect(() => {
    setVisible(visible)
  }, [visible])

  useEffect(() => {
    if (_visible && togglerRef.current && tooltipRef.current) {
      initPopper(togglerRef.current, tooltipRef.current, popperConfig)
    }

    return () => {
      destroyPopper()
    }
  }, [_visible])

  return (
    <>
      {React.cloneElement(children as React.ReactElement<any>, {
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
      {typeof window !== 'undefined' &&
        createPortal(
          <Transition
            in={_visible}
            mountOnEnter
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
                  'tooltip',
                  'bs-tooltip-auto',
                  {
                    fade: animation,
                    show: state === 'entered',
                  },
                  className,
                )}
                ref={tooltipRef}
                role="tooltip"
                {...rest}
              >
                <div data-popper-arrow className="tooltip-arrow"></div>
                <div className="tooltip-inner">{content}</div>
              </div>
            )}
          </Transition>,
          document.body,
        )}
    </>
  )
}

CTooltip.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
