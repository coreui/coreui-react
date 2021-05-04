import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CToastHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  icon?: string | ElementType
  time?: string
  /**
   * Title node for your component. [docs]
   */
  title?: string | ElementType
}

export const CToastHeader = forwardRef<HTMLDivElement, CToastHeaderProps>(
  ({ children, className, icon, time, title, ...rest }, ref) => {
    const _className = classNames('toast-header', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {icon}
        {title && <span className="fw-semibold me-auto">{title}</span>}
        {time && <span className="text-medium-emphasis small">{time}</span>}
        {children}
      </div>
    )
  },
)

CToastHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  time: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
}

CToastHeader.displayName = 'CToastHeader'
