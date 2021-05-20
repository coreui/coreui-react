import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CProgress } from '../progress/CProgress'

export interface CWidgetProgressIconProps extends HTMLAttributes<HTMLDivElement> {
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
  icon?: string | ReactNode
  /**
   * Sets the color context of the progress bar to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  progressColor?: Colors
  progressValue?: number
  progressWhite?: boolean
  title?: string
  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
   */
  textColor?: string
  value?: string | number
}

export const CWidgetProgressIcon = forwardRef<HTMLDivElement, CWidgetProgressIconProps>(
  (
    {
      className,
      color,
      icon,
      progressColor,
      progressValue,
      progressWhite,
      textColor,
      title,
      value,
      ...rest
    },
    ref,
  ) => {
    return (
      <CCard className={className} color={color} textColor={textColor} {...rest} ref={ref}>
        <CCardBody>
          {icon && (
            <div className={`text-medium-emphasis${color ? '-inverse' : ''} text-end mb-4`}>
              {icon}
            </div>
          )}
          {value && (
            <div className={`text-high-emphasis${color ? '-inverse' : ''} fs-4 fw-semibold`}>
              {value}
            </div>
          )}
          {title && (
            <div
              className={`text-medium-emphasis${
                color ? '-inverse' : ''
              } text-uppercase fw-semibold small`}
            >
              {title}
            </div>
          )}
          <CProgress
            className="mt-3 mb-0"
            color={progressColor}
            height={4}
            value={progressValue}
            white={progressWhite}
          />
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetProgressIcon.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  progressColor: PropTypes.string,
  progressValue: PropTypes.number,
  progressWhite: PropTypes.bool,
  textColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CWidgetProgressIcon.displayName = 'CWidgetCWidgetProgressIcon'
