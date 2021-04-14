import React, { FC, ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { Manager, Popper, Reference } from 'react-popper'
import { Transition } from 'react-transition-group'

import { CTooltipContent } from './CTooltipContent'
import { Placements, Triggers } from '../Types'

export interface CTooltipProps {
  children: JSX.Element
  /**
   * Content node for your component. [docs]
   */
  content: ReactNode
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. [docs]
   */
  trigger?: Triggers | Triggers[]
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. [docs]
   *
   * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
   * @default 'top'
   */
  placement?: Placements | 'start' | 'end' // TODO: find solution
  /**
   * Toggle the visibility of popover component. [docs]
   *
   * @default true
   */
  visible?: boolean
  // TODO: Consider if this method is useful.
  // /**
  //  * Method called immediately after the component's visibility has been changed. [docs]
  //  */
  // onToggle?: (visible: boolean) => void
}

export const CTooltip: FC<CTooltipProps> = ({
  children,
  placement = 'top',
  trigger = 'hover',
  visible,
  // TODO: Consider if this method is method is useful.
  // onToggle,
  ...rest
}) => {
  const [_visible, setVisible] = useState(visible)
  const _placement = placement === 'start' ? 'left' : placement === 'end' ? 'right' : placement

  // TODO: Consider if this method is method is useful.
  // useEffect(() => {
  //   onToggle && onToggle
  // }, [_visible])

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
                <Popper placement={_placement}>
                  {(p) => (
                    <CTooltipContent
                      transitionClass={transitionClass}
                      placementClassNamePostfix={placement}
                      {...rest}
                      {...p}
                    ></CTooltipContent>
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
