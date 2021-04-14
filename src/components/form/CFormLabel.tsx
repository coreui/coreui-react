import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CFormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  classNameParent?: string
}

export const CFormLabel = forwardRef<HTMLLabelElement, CFormLabelProps>(
  ({ children, className, classNameParent, ...rest }, ref) => {
    const _className = classNameParent ? classNameParent : classNames('form-label', className)
    return (
      <label className={_className} {...rest} ref={ref}>
        {children}
      </label>
    )
  },
)

CFormLabel.displayName = 'CFormLabel'
