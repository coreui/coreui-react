import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CInputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  size?: 'sm' | 'lg'
}

export const CInputGroup = forwardRef<HTMLDivElement, CInputGroupProps>(
  ({ children, className, size, ...rest }, ref) => {
    const _className = classNames(
      'input-group',
      {
        [`input-group-${size}`]: size,
      },
      className,
    )
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CInputGroup.displayName = 'CInputGroup'
