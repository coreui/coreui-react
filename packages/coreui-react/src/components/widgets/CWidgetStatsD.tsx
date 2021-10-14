import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CCardHeader } from '../card/CCardHeader'
import { CCol } from '../grid/CCol'

type Value = {
  title?: string | ReactNode
  value?: number | string | ReactNode
}

export interface CWidgetStatsDProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Chart node for your component.
   */
  chart?: string | ReactNode
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Icon node for your component.
   */
  icon?: string | ReactNode
  /**
   * Values and titles for your component.
   */
  values?: Value[]
}

export const CWidgetStatsD = forwardRef<HTMLDivElement, CWidgetStatsDProps>(
  ({ className, chart, color, icon, values, ...rest }, ref) => {
    const _className = classNames(className)
    const classNameHeader = classNames(
      'position-relative d-flex justify-content-center align-items-center',
      {
        [`bg-${color}`]: color,
      },
    )

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardHeader className={classNameHeader}>
          {icon}
          {chart}
        </CCardHeader>
        <CCardBody className="row text-center">
          {values &&
            values.map((value: Value, index: number) => {
              return (
                <React.Fragment key={index}>
                  {index % 2 !== 0 && <div className="vr"></div>}
                  <CCol>
                    <div className="fs-5 fw-semibold">{value.value}</div>
                    <div className="text-uppercase text-medium-emphasis small">{value.title}</div>
                  </CCol>
                </React.Fragment>
              )
            })}
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetStatsD.propTypes = {
  chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  color: colorPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  values: PropTypes.arrayOf(PropTypes.any),
}

CWidgetStatsD.displayName = 'CWidgetStatsD'
