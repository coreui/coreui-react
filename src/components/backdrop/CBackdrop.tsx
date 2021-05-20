// TODO: add smooth transition.

import React, { forwardRef, HTMLAttributes } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CBackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Toggle the visibility of modal component. [docs]
   */
  visible?: boolean
}

export const CBackdrop = forwardRef<HTMLDivElement, CBackdropProps>(
  ({ className, visible, ...rest }, ref) => {
    const _className = classNames(
      'modal-backdrop fade',
      {
        show: visible,
      },
      className,
    )

    return (
      <CSSTransition in={visible} timeout={150} mountOnEnter unmountOnExit>
        <div className={_className} {...rest} ref={ref} />
      </CSSTransition>
    )
  },
)

CBackdrop.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
}

CBackdrop.displayName = 'CBackdrop'
