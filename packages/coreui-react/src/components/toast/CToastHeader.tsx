import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CToastClose } from './CToastClose'

export interface CToastHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
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
   * Automatically add a close button to the header.
   */
  closeButton?: boolean
}

export const CToastHeader = forwardRef<HTMLDivElement, CToastHeaderProps>(
  ({ children, ariaCloseLabel, className, closeButton, ...rest }, ref) => {
    return (
      <div className={classNames('toast-header', className)} {...rest} ref={ref}>
        {children}
        {closeButton && <CToastClose aria-label={ariaCloseLabel} />}
      </div>
    )
  }
)

CToastHeader.propTypes = {
  ariaCloseLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
}

CToastHeader.displayName = 'CToastHeader'
