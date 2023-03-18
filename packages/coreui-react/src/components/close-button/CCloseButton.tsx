import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CCloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Change the default color to white.
   */
  white?: boolean
}

export const CCloseButton = forwardRef<HTMLButtonElement, CCloseButtonProps>(
  ({ className, disabled, white, ...rest }, ref) => {
    return (
      <button
        type="button"
        className={classNames(
          'btn',
          'btn-close',
          {
            'btn-close-white': white,
          },
          disabled,
          className,
        )}
        aria-label="Close"
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    )
  },
)

CCloseButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
}

CCloseButton.displayName = 'CCloseButton'
