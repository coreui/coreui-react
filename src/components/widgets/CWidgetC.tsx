import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CProgress, CProgressProps } from '../progress/CProgress'

export interface CWidgetCProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
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
  inverse?: boolean
  /**
   * Sets the color context of the progress bar to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  progress?: CProgressProps
  /**
   * Title node for your component. [docs]
   */
  title?: string | ReactNode
  /**
   * Value node for your component. [docs]
   */
  value?: string | number | ReactNode
}

export const CWidgetC = forwardRef<HTMLDivElement, CWidgetCProps>(
  ({ className, color, icon, inverse, progress, title, value, ...rest }, ref) => {
    return (
      <CCard
        className={className}
        color={color}
        {...(inverse && { textColor: 'high-emphasis-inverse' })}
        {...rest}
        ref={ref}
      >
        <CCardBody>
          {icon && (
            <div className={`text-medium-emphasis${inverse ? '-inverse' : ''} text-end mb-4`}>
              {icon}
            </div>
          )}
          {value && (
            <div className={`text-high-emphasis${inverse ? '-inverse' : ''} fs-4 fw-semibold`}>
              {value}
            </div>
          )}
          {title && (
            <div className={inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'}>
              {title}
            </div>
          )}
          <CProgress
            className="mt-3 mb-0"
            height={4}
            {...(inverse && { white: true })}
            {...progress}
          />
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetC.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  inverse: PropTypes.bool,
  progress: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
}

CWidgetC.displayName = 'CWidgetCWidgetC'
