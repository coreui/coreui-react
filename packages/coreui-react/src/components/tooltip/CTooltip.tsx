import React, { FC, ReactNode, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { usePopper } from 'react-popper'
import { Transition } from 'react-transition-group'

import { Triggers, triggerPropType } from '../Types'

export interface CTooltipProps {
  // TODO: find solution to not use any
  children: any
  /**
   * Content node for your component.
   */
  content: ReactNode | string
  /**
   * Offset of the popover relative to its target.
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
   * Toggle the visibility of popover component.
   */
  visible?: boolean
}

export const CTooltip: FC<CTooltipProps> = ({
  children,
  content,
  offset = [0, 0],
  onHide,
  onShow,
  placement = 'top',
  trigger = 'hover',
  visible,
  ...rest
}) => {
  const tooltipRef = useRef()
  const [_visible, setVisible] = useState(visible)

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: offset,
        },
      },
    ],
    placement: placement,
  })

  const getTransitionClass = (state: string) => {
    return state === 'entering'
      ? 'fade'
      : state === 'entered'
      ? 'fade show'
      : state === 'exiting'
      ? 'fade'
      : 'fade'
  }

  return (
    <>
      {React.cloneElement(children, {
        ref: setReferenceElement,
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
            nodeRef={tooltipRef}
            onEnter={onShow}
            onExit={onHide}
            timeout={{
              enter: 0,
              exit: 200,
            }}
            unmountOnExit
          >
            {(state) => {
              const transitionClass = getTransitionClass(state)
              return (
                <div
                  className={classNames(
                    `tooltip bs-tooltip-${
                      placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement
                    }`,
                    transitionClass,
                  )}
                  ref={setPopperElement}
                  role="tooltip"
                  style={styles.popper}
                  {...attributes.popper}
                  {...rest}
                >
                  <div className="tooltip-arrow" style={styles.arrow} ref={setArrowElement}></div>
                  <div className="tooltip-inner">{content}</div>
                </div>
              )
            }}
          </Transition>,
          document.body,
        )}
    </>
  )
}

CTooltip.propTypes = {
  children: PropTypes.any,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
