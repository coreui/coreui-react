import React, { FC, ReactElement, ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Manager, Popper, Reference } from 'react-popper'
import { CSSTransition } from 'react-transition-group'

import { CTooltipContent } from './CTooltipContent'
import { Triggers, triggerPropType } from '../Types'

export interface CTooltipProps {
  children: ReactElement
  /**
   * Content node for your component.
   */
  content: ReactNode
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   *
   * @type 'hover' | 'focus' | 'click'
   */
  trigger?: Triggers | Triggers[]
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   */
  placement?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * Toggle the visibility of popover component.
   */
  visible?: boolean
}

export const CTooltip: FC<CTooltipProps> = ({
  children,
  placement = 'top',
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
          <CSSTransition
            in={_visible}
            timeout={{
              enter: 0,
              exit: 200,
            }}
            mountOnEnter
            unmountOnExit
          >
            {(state) => {
              const transitionClass = getTransitionClass(state)
              return (
                <Popper placement={placement}>
                  {(p) => (
                    <CTooltipContent
                      transitionClass={transitionClass}
                      placementClassNamePostfix={
                        placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement
                      }
                      {...rest}
                      {...p}
                    ></CTooltipContent>
                  )}
                </Popper>
              )
            }}
          </CSSTransition>,
          document.body,
        )}
    </Manager>
  )
}

CTooltip.propTypes = {
  children: PropTypes.any,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CTooltip.displayName = 'CTooltip'
