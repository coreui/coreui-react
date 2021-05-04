import React, { HTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

export interface CTabPaneProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Toggle the visibility of component. [docs]
   */
  visible?: boolean
}

export const CTabPane = forwardRef<HTMLDivElement, CTabPaneProps>(
  ({ children, className, visible, ...rest }, ref) => {
    const style = {
      transition: `opacity 150ms linear`,
    }

    const getTransitionClass = (state: string) => {
      return state === 'entering'
        ? 'show'
        : state === 'entered'
        ? 'show active'
        : state === 'exiting'
        ? 'active'
        : ''
    }

    const _className = classNames('tab-pane', 'fade', className)
    return (
      <Transition in={visible} timeout={350}>
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return (
            <div
              className={classNames(_className, transitionClass)}
              style={{ ...style }}
              {...rest}
              ref={ref}
            >
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
  visible: PropTypes.bool,
}

CTabPane.displayName = 'CTabPane'
