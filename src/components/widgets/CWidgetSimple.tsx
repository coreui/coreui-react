import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'

export interface CWidgetSimpleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  title?: string
  value?: string | number
}

export const CWidgetSimple = forwardRef<HTMLDivElement, CWidgetSimpleProps>(
  ({ children, className, title, value, ...rest }, ref) => {
    const _className = classNames(className)

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardBody className="text-center">
          {title && (
            <div className="text-medium-emphasis small text-uppercase fw-semibold">{title}</div>
          )}
          {value && <div className="fs-6 fw-semibold py-3">{value}</div>}
          {children}
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetSimple.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CWidgetSimple.displayName = 'CWidgetSimple'
