import React, { forwardRef, HTMLAttributes, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { useForkedRef } from '../../utils/hooks'

export interface CCollapseProps extends HTMLAttributes<HTMLDivElement> {
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

export const CCollapse = forwardRef<HTMLDivElement, CCollapseProps>(
  ({ children, className, onHide, onShow, visible, ...rest }, ref) => {
    const [height, setHeight] = useState<number>()
    const collapseRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, collapseRef)

    const getTransitionClass = (state: string) => {
      return state === 'entering'
        ? 'collapsing'
        : state === 'entered'
        ? 'collapse show'
        : state === 'exiting'
        ? 'collapsing'
        : 'collapse'
    }

    const onEntering = () => {
      onShow && onShow()
      collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onEntered = () => {
      setHeight(0)
    }

    const onExit = () => {
      collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onExiting = () => {
      onHide && onHide()
      setHeight(0)
    }

    const onExited = () => {
      setHeight(0)
    }

    const _className = classNames(className)

    return (
      <CSSTransition
        in={visible}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
        timeout={350}
      >
        {(state) => {
          const transitionClass = getTransitionClass(state)
          const currentHeight = height === 0 ? null : { height }
          return (
            <div
              className={classNames(_className, transitionClass)}
              style={{ ...currentHeight }}
              {...rest}
              ref={forkedRef}
            >
              {children}
            </div>
          )
        }}
      </CSSTransition>
    )
  },
)

CCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool,
}

CCollapse.displayName = 'CCollapse'
