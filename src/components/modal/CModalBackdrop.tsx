import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalBackdrop: FC<CModalBackdropProps> = ({ children, className, ...rest }) => {
  const _className = classNames('modal-backdrop', className)

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}
