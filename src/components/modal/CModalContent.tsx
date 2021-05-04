import React, { FC, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalContent: FC<CModalContentProps> = ({ children, className, ...rest }) => {
  const _className = classNames('modal-content', className)

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}

CModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CModalContent.displayName = 'CModalContent'
