import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CToastClose } from './CToastClose'

export interface CToastHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Automatically add a close button to the header.
   */
  close?: boolean
}

export const CToastHeader = forwardRef<HTMLDivElement, CToastHeaderProps>(
  ({ children, className, close, ...rest }, ref) => {
    const _className = classNames('toast-header', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
        {close && <CToastClose />}
      </div>
    )
  },
)

CToastHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.bool,
}

CToastHeader.displayName = 'CToastHeader'
