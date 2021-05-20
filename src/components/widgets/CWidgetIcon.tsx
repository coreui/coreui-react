import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CCardFooter } from '../card/CCardFooter'

export interface CWidgetIconProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  footer?: string | ReactNode
  icon?: string | ReactNode
  iconPadding?: number
  padding?: number
  title?: string
  value?: string | number
}

export const CWidgetIcon = forwardRef<HTMLDivElement, CWidgetIconProps>(
  (
    { className, color, footer, icon, iconPadding = 3, padding = 3, title, value, ...rest },
    ref,
  ) => {
    const _className = classNames(className)

    return (
      <CCard className={_className} {...rest} ref={ref}>
        <CCardBody className={`d-flex align-items-center p-${padding}`}>
          <div className={`me-3 text-white bg-${color} p-${iconPadding}`}>{icon}</div>
          <div>
            <div className={`fs-6 fw-semibold text-${color}`}>{value}</div>
            <div className="text-medium-emphasis text-uppercase fw-semibold small">{title}</div>
          </div>
        </CCardBody>
        {footer && <CCardFooter>{footer}</CCardFooter>}
      </CCard>
    )
  },
)

CWidgetIcon.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  iconPadding: PropTypes.number,
  padding: PropTypes.number,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CWidgetIcon.displayName = 'CWidgetIcon'
