import React, { FC, HTMLAttributes, ReactNode, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
import { createPopper, Instance, Placement } from '@popperjs/core'

import { triggerPropType } from '../../props'
import type { Triggers } from '../../types'
import { isRTL } from '../../utils'

export interface CTooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
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
  console.log(element)
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
  className,
  content,
  offset = [0, 6],
  onHide,
  onShow,
  placement = 'top',
  trigger = 'hover',
  visible,
  ...rest
}) => {
  const tooltipRef = useRef(null)
  const togglerRef = useRef(null)
  const popper = useRef<Instance>()
  const [_visible, setVisible] = useState(visible)

  useEffect(() => {
    setVisible(visible)
  }, [visible])

  useEffect(() => {
    if (_visible) {
      initPopper()
    }

    return () => {
      destroyPopper()
    }
  }, [_visible])

  const initPopper = () => {
    if (togglerRef.current && tooltipRef.current) {
      popper.current = createPopper(togglerRef.current, tooltipRef.current, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: offset,
            },
          },
        ],
        placement: getPlacement(placement, togglerRef.current),
      })
    }
  }

  const destroyPopper = () => {
    if (popper.current) {
      popper.current.destroy()
    }

    popper.current = undefined
  }

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
                  `bs-tooltip-${getPlacement(placement, togglerRef.current)
                    .replace('left', 'start')
                    .replace('right', 'end')}`,
                  'fade',
                  {
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
