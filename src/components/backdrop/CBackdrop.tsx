import React, { forwardRef, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CBackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Toggle the visibility of modal component.
   */
  visible?: boolean
}

export const CBackdrop = forwardRef<HTMLDivElement, CBackdropProps>(
  ({ className = 'modal-backdrop', visible, ...rest }, ref) => {
    const _className = classNames(className, 'fade')

    const getTransitionClass = (state: string) => {
      return state === 'entered' && 'show'
    }

    return (
      <CSSTransition in={visible} timeout={150} mountOnEnter unmountOnExit>
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return <div className={classNames(_className, transitionClass)} {...rest} ref={ref} />
        }}
      </CSSTransition>
    )
  },
)

CBackdrop.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
}

CBackdrop.displayName = 'CBackdrop'
