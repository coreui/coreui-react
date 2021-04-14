import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CCardGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CCardGroup = forwardRef<HTMLDivElement, CCardGroupProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-group', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CCardGroup.displayName = 'CCardGroup'
