import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalBody: FC<CModalBodyProps> = ({ children, className, ...rest }) => {
  const _className = classNames('modal-body', className)

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}
