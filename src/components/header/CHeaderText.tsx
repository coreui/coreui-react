import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CHeaderTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CHeaderText = forwardRef<HTMLSpanElement, CHeaderTextProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('header-text', className)

    return (
      <span className={_className} {...rest} ref={ref}>
        {children}
      </span>
    )
  },
)

CHeaderText.displayName = 'CHeaderText'
