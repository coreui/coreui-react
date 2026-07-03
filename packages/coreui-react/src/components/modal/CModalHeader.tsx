import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CCloseButton } from '../close-button/CCloseButton'
import { CModalContext } from './CModalContext'

export interface CModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sets the `aria-label` of the close button.
   *
   * @since 5.13.0
   */
  ariaCloseLabel?: string
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Add a close button component to the header.
   */
  closeButton?: boolean
}

export const CModalHeader = forwardRef<HTMLDivElement, CModalHeaderProps>(
  ({ children, ariaCloseLabel, className, closeButton = true, ...rest }, ref) => {
    const { setVisible } = useContext(CModalContext)

    return (
      <div className={classNames('modal-header', className)} {...rest} ref={ref}>
        {children}
        {closeButton && (
          <CCloseButton aria-label={ariaCloseLabel} onClick={() => setVisible(false)} />
        )}
      </div>
    )
  }
)

CModalHeader.propTypes = {
  ariaCloseLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
}

CModalHeader.displayName = 'CModalHeader'
