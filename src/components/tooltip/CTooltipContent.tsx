import React, { CSSProperties, forwardRef } from 'react'
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

CTooltipContent.displayName = 'CTooltipContent'
