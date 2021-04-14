import React, { forwardRef, useCallback } from 'react'
import classNames from 'classnames'
import transitionEnd from 'dom-helpers/transitionEnd'
import { Transition } from 'react-transition-group'

export interface CFadeProps {
  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear?: boolean
  children: any
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in?: boolean
  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter?: boolean
  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit?: boolean
  /**
   * Callback fired before the component fades in
   */
  onEnter?(node: HTMLElement): any
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering?(node: HTMLElement): any
  /**
   * Callback fired after the has component faded in
   */
  onEntered?(node: HTMLElement): any
  /**
   * Callback fired before the component fades out
   */
  onExit?(node: HTMLElement): any
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting?(node: HTMLElement): any
  /**
   * Callback fired after the component has faded out
   */
  onExited?(node: HTMLElement): any
  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout?: number
}

export const CFade = forwardRef<Transition<any>, CFadeProps>(
  ({ className, children, ...props }, ref) => {
    const handleEnter = useCallback(
      (node) => {
        if (props.onEnter) props.onEnter(node)
      },
      [props],
    )

    return (
      <Transition ref={ref} addEndListener={transitionEnd} {...props} onEnter={handleEnter}>
        {(status) => {
          const isActive = status === 'entered'
          const classes = classNames(
            'fade',
            className,
            children.props.className,
            isActive && 'show',
          )

          return React.cloneElement(children, {
            className: classes,
          })
        }}
      </Transition>
    )
  },
)

CFade.defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
}

CFade.displayName = 'CFade'
