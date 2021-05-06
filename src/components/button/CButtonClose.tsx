import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CButtonCloseProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
  /**
   * Change the default color to white. [docs]
   */
  white?: boolean
}

export const CButtonClose = forwardRef<HTMLButtonElement, CButtonCloseProps>(
  ({ className, disabled, white, ...rest }, ref) => {
    const _className = classNames(
      'btn',
      'btn-close',
      {
        'btn-close-white': white,
      },
      disabled,
      className,
    )
    return (
      <button className={_className} aria-label="Close" disabled={disabled} {...rest} ref={ref} />
    )
  },
)

CButtonClose.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
}

CButtonClose.displayName = 'CButtonClose'
