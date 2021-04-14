import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * TODO:. [docs]
   */
  container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
  /**
   * TODO:. [docs]
   */
  position?: 'fixed' | 'sticky'
}

export const CHeader = forwardRef<HTMLDivElement, CHeaderProps>(
  ({ children, className, container, position, ...rest }, ref) => {
    const _className = classNames('header', { [`header-${position}`]: position }, className)

    let content
    if (container) {
      content = (
        <div className={`container${container !== true ? '-' + container : ''}`}>{children}</div>
      )
    } else {
      content = children
    }

    return (
      <div className={_className} {...rest} ref={ref}>
        {content}
      </div>
    )
  },
)

CHeader.displayName = 'CHeader'
