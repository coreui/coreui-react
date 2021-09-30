import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'

import { Colors, colorPropType } from '../Types'

import { CCard } from '../card/CCard'
import { CCardBody } from '../card/CCardBody'
import { CProgress, CProgressProps } from '../progress/CProgress'

export interface CWidgetStatsBProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Colors have been inverted from their default dark shade.
   */
  inverse?: boolean
  /**
   * Sets the color context of the progress bar to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  progress?: CProgressProps
  /**
   * Title node for your component.
   */
  title?: string | ReactNode
  /**
   * Helper text for your component.
   */
  text?: string
  /**
   * Value node for your component.
   */
  value?: string | number | ReactNode
}

export const CWidgetStatsB = forwardRef<HTMLDivElement, CWidgetStatsBProps>(
  ({ className, color, inverse, progress, text, title, value, ...rest }, ref) => {
    return (
      <CCard
        className={className}
        color={color}
        {...(inverse && { textColor: 'high-emphasis-inverse' })}
        {...rest}
        ref={ref}
      >
        <CCardBody>
          {value && <div className="fs-4 fw-semibold">{value}</div>}
          {title && <div>{title}</div>}
          <CProgress className="my-2" height={4} {...(inverse && { white: true })} {...progress} />
          {text && (
            <small className={inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'}>
              {text}
            </small>
          )}
        </CCardBody>
      </CCard>
    )
  },
)

CWidgetStatsB.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  inverse: PropTypes.bool,
  progress: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
}

CWidgetStatsB.displayName = 'CWidgetCWidgetStatsB'
