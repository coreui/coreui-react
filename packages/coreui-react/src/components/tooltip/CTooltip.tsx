import React, { FC, ReactElement, ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Manager, Popper, Reference } from 'react-popper'
import { Transition } from 'react-transition-group'

// import { CTooltipContent } from './CTooltipContent'
import { Triggers, triggerPropType } from '../Types'

export interface CTooltipProps {
  children: ReactElement
  /**
   * Content node for your component.
   */
  content: ReactNode | string
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
  placement = 'top',
  onHide,
  onShow,
  trigger = 'hover',
  visible,
  ...rest
}) => {
  const [_visible, setVisible] = useState(visible)

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
    <Manager>
      <Reference>
        {({ ref }) =>
          React.cloneElement(children, {
            ref: ref,
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
          })
        }
      </Reference>
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
            {(state) => {
              const transitionClass = getTransitionClass(state)
              return (
                <Popper placement={placement}>
                  {({ arrowProps, style, ref }) => (
                    <div
                      className={classNames(
                        `tooltip bs-tooltip-${
                          placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement
                        }`,
                        transitionClass,
                      )}
                      ref={ref}
                      role="tooltip"
                      style={style}
                      {...rest}
                    >
                      <div className="tooltip-arrow" {...arrowProps}></div>
                      <div className="tooltip-inner">{content}</div>
                    </div>
                  )}
                </Popper>
              )
            }}
          </Transition>,
          document.body,
        )}
    </Manager>
  )
}

CTooltip.propTypes = {
  children: PropTypes.any,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
