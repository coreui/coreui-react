import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'

export interface CWidgetEProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Chart node for your component. [docs]
   */
  chart?: string | ReactNode
  /**
   * Title node for your component. [docs]
   */
  title?: string | ReactNode
  /**
   * Value node for your component. [docs]
   */
  value?: string | number | ReactNode
}

export const CWidgetE = forwardRef<HTMLDivElement, CWidgetEProps>(
  ({ chart, className, title, value, ...rest }, ref) => {
    const _className = classNames(className)

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardBody className="text-center">
          {title && (
            <div className="text-medium-emphasis small text-uppercase fw-semibold">{title}</div>
          )}
          {value && <div className="fs-6 fw-semibold py-3">{value}</div>}
          {chart}
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetE.propTypes = {
  children: PropTypes.node,
  chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
}

CWidgetE.displayName = 'CWidgetE'
