import React, { HTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

export interface CTabPaneProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Toggle the visibility of component.
   */
  visible?: boolean
}

export const CTabPane = forwardRef<HTMLDivElement, CTabPaneProps>(
  ({ children, className, onHide, onShow, visible, ...rest }, ref) => {
    const getTransitionClass = (state: string) => {
      return state === 'entered' && 'show'
    }

    const _className = classNames(
      'tab-pane',
      'fade',
      {
        active: visible,
      },
      className,
    )
    return (
      <Transition in={visible} onEnter={onShow} onExit={onHide} timeout={150}>
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return (
            <div className={classNames(_className, transitionClass)} {...rest} ref={ref}>
              {children}
            </div>
          )
        }}
      </Transition>
    )
  },
)

CTabPane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool,
}

CTabPane.displayName = 'CTabPane'
