import React, { CSSProperties, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CTooltipProps } from './CTooltip'
import { PopperChildrenProps } from 'react-popper'

interface CTooltipContentProps
  extends Omit<CTooltipProps, 'placement' | 'children' | 'trigger'>,
    Omit<PopperChildrenProps, 'placementPostfix' | 'style'> {
  transitionClass?: string
  style?: CSSProperties
  placementClassNamePostfix?: string
}

export const CTooltipContent = forwardRef<HTMLDivElement, CTooltipContentProps>(
  ({ content, placementClassNamePostfix, arrowProps, transitionClass, style }, ref) => (
    <div
      className={classNames(`tooltip bs-tooltip-${placementClassNamePostfix}`, transitionClass)}
      ref={ref}
      style={style}
      role="tooltip"
    >
      <div className="tooltip-arrow" {...arrowProps}></div>
      <div className="tooltip-inner">{content}</div>
    </div>
  ),
)

CTooltipContent.propTypes = {
  arrowProps: PropTypes.any,
  content: PropTypes.node,
  placementClassNamePostfix: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  transitionClass: PropTypes.string,
}

CTooltipContent.displayName = 'CTooltipContent'
