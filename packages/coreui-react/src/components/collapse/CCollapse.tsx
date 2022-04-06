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
   * Set horizontal collapsing to transition the width instead of height.
   */
  horizontal?: boolean
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
  ({ children, className, horizontal, onHide, onShow, visible, ...rest }, ref) => {
    const [height, setHeight] = useState<number>()
    const [width, setWidth] = useState<number>()
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

      if (horizontal) {
        collapseRef.current && setWidth(collapseRef.current.scrollWidth)
        return
      }
      collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onEntered = () => {
      if (horizontal) {
        setWidth(0)
        return
      }
      setHeight(0)
    }

    const onExit = () => {
      if (horizontal) {
        collapseRef.current && setWidth(collapseRef.current.scrollWidth)
        return
      }
      collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onExiting = () => {
      onHide && onHide()
      if (horizontal) {
        setWidth(0)
        return
      }
      setHeight(0)
    }

    const onExited = () => {
      if (horizontal) {
        setWidth(0)
        return
      }
      setHeight(0)
    }

    const _className = classNames(
      {
        'collapse-horizontal': horizontal,
      },
      className,
    )

    return (
      <CSSTransition
        in={visible}
        nodeRef={collapseRef}
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
          const currentWidth = width === 0 ? null : { width }
          return (
            <div
              className={classNames(_className, transitionClass)}
              style={{ ...currentHeight, ...currentWidth }}
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
  horizontal: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool,
}

CCollapse.displayName = 'CCollapse'
