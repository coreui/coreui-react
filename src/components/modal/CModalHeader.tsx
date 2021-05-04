import React, { FC, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import { CButtonClose } from '../button/CButtonClose'
import classNames from 'classnames'

export interface CModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * TODO: . [docs]
   */
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

CModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onDismiss: PropTypes.func,
}

CModalHeader.displayName = 'CModalHeader'
