import React, { FC, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalFooter: FC<CModalFooterProps> = ({ children, className, ...rest }) => {
  const _className = classNames('modal-footer', className)

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}

CModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CModalFooter.displayName = 'CModalFooter'
