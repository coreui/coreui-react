import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import { CModalContext } from './CModal'
import { CCloseButton } from '../close-button/CCloseButton'
import classNames from 'classnames'

export interface CModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Add a close button component to the header.
   */
  closeButton?: boolean
}

export const CModalHeader = forwardRef<HTMLDivElement, CModalHeaderProps>(
  ({ children, className, closeButton = true, ...rest }, ref) => {
    const { setVisible } = useContext(CModalContext)
    const _className = classNames('modal-header', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
        {closeButton && <CCloseButton onClick={() => setVisible(false)} />}
      </div>
    )
  },
)

CModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
}

CModalHeader.displayName = 'CModalHeader'
