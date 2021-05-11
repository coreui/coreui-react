import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CProgress } from '../progress/CProgress'

export interface CWidgetProgressProps extends HTMLAttributes<HTMLDivElement> {
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
  /**
   * Sets the color context of the progress bar to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  progressColor?: Colors
  progressValue?: number
  progressWhite?: boolean
  title?: string
  text?: string
  /**
   * Sets the text color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
   */
  textColor?: string
  value?: string | number
}

export const CWidgetProgress = forwardRef<HTMLDivElement, CWidgetProgressProps>(
  (
    {
      className,
      color,
      progressColor,
      progressValue,
      progressWhite,
      text,
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
          {value && <div className="fs-4 fw-semibold">{value}</div>}
          {title && <div>{title}</div>}
          <CProgress
            className="my-2"
            color={progressColor}
            height={4}
            value={progressValue}
            white={progressWhite}
          />
          {text && <small className="text-medium-emphasis">{text}</small>}
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetProgress.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  progressColor: PropTypes.string,
  progressValue: PropTypes.number,
  progressWhite: PropTypes.bool,
  text: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CWidgetProgress.displayName = 'CWidgetCWidgetProgress'
