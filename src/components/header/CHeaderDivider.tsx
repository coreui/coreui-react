import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CHeaderDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CHeaderDivider: FC<CHeaderDividerProps> = ({ className, ...rest }) => {
  const _className = classNames('header-divider', className)

  return <div className={_className} {...rest} />
}
