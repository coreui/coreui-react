import React, { FC, HTMLAttributes } from 'react'
import { CButtonClose } from '../button/CButtonClose'
import classNames from 'classnames'

export interface CModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  onDismiss?: () => void
}

export const CModalHeader: FC<CModalHeaderProps> = ({
  children,
  className,
  onDismiss,
  ...rest
}) => {
  const _className = classNames('modal-header', className)

  return (
    <div className={_className} {...rest}>
      {children}
      {onDismiss && <CButtonClose onClick={onDismiss} />}
    </div>
  )
}
