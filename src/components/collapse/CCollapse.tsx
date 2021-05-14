import React, { forwardRef, HTMLAttributes, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { useForkedRef } from '../../utils/hooks'

export interface CCollapseProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Toggle the visibility of component. [docs]
   */
  visible?: boolean
}

export const CCollapse = forwardRef<HTMLDivElement, CCollapseProps>(
  ({ children, className, visible, ...rest }, ref) => {
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
      collapseRef && collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onEntered = () => {
      setHeight(0)
    }

    const onExit = () => {
      collapseRef && collapseRef.current && setHeight(collapseRef.current.scrollHeight)
    }

    const onExiting = () => {
      setHeight(0)
    }

    const onExited = () => {
      setHeight(0)
    }

    const _className = classNames(className)

    return (
      <CSSTransition
        in={visible}
        timeout={350}
        onEntering={onEntering}
        onEntered={onEntered}
        onExit={onExit}
        onExiting={onExiting}
        onExited={onExited}
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
  visible: PropTypes.bool,
}

CCollapse.displayName = 'CCollapse'
