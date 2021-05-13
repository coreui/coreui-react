// TODO: add smooth transition.

import React, { forwardRef, HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CModalBackdropProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalBackdrop = forwardRef<HTMLDivElement, CModalBackdropProps>(
  ({ className, ...rest }, ref) => {
  const _className = classNames('modal-backdrop fade', className)

  const backdrop = (ref?: React.Ref<HTMLDivElement>) => {
    return (
      <div className={_className} {...rest} ref={ref} />
    )
  }

  return typeof window ? 'undefined' && createPortal(backdrop(ref), document.body) : backdrop(ref)
})

CModalBackdrop.propTypes = {
  className: PropTypes.string,
}

CModalBackdrop.displayName = 'CModalBackdrop'
