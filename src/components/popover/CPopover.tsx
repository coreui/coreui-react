import React, { FC, ReactElement, ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { Manager, Popper, Reference } from 'react-popper'
import { CSSTransition } from 'react-transition-group'

import { CPopoverContent } from './CPopoverContent'
import { Triggers, triggerPropType } from '../Types'

export interface CPopoverProps {
  children: ReactElement
  /**
   * Content node for your component.
   */
  content: ReactNode
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
   * Title node for your component.
   */
  title?: ReactNode
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

export const CPopover: FC<CPopoverProps> = ({
  children,
  placement = 'top',
  offset = [0, 8],
  onHide,
  onShow,
  trigger = 'click',
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
            onEnter={onShow}
            onExit={onHide}
            mountOnEnter
            unmountOnExit
          >
            {(state) => {
              const transitionClass = getTransitionClass(state)
              return (
                <Popper
                  placement={placement}
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: offset,
                      },
                    },
                  ]}
                >
                  {(p) => (
                    <CPopoverContent
                      transitionClass={transitionClass}
                      placementClassNamePostfix={
                        placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement
                      }
                      {...rest}
                      {...p}
                    ></CPopoverContent>
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

CPopover.propTypes = {
  children: PropTypes.any,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CPopover.displayName = 'CPopover'
