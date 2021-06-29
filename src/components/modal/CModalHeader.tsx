import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { CCloseButton } from '../close-button/CCloseButton'
import classNames from 'classnames'

export interface CModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Add a close button component to the header which will call the provided handler when clicked. [docs]
   */
  onDismiss?: () => void
}

export const CModalHeader = forwardRef<HTMLDivElement, CModalHeaderProps>(
  ({ children, className, onDismiss, ...rest }, ref) => {
    const _className = classNames('modal-header', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
        {onDismiss && <CCloseButton onClick={onDismiss} />}
      </div>
    )
  },
)

CModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onDismiss: PropTypes.func,
}

CModalHeader.displayName = 'CModalHeader'
