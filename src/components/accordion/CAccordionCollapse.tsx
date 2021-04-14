import React, { forwardRef } from 'react'
import { CCollapse, CCollapseProps } from '../collapse/CCollapse'

export const CAccordionCollapse = forwardRef<HTMLDivElement, CCollapseProps>(
  ({ children, ...props }, ref) => {
    return (
      <CCollapse className="accordion-collapse" {...props} ref={ref}>
        {children}
      </CCollapse>
    )
  },
)

CAccordionCollapse.displayName = 'CAccordionCollapse'
