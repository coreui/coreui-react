import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { CCollapse, CCollapseProps } from '../collapse/CCollapse'

export const CAccordionCollapse = forwardRef<HTMLDivElement, Omit<CCollapseProps, 'horizontal'>>(
  ({ children, ...props }, ref) => {
    return (
      <CCollapse className="accordion-collapse" {...props} ref={ref}>
        {children}
      </CCollapse>
    )
  },
)

CAccordionCollapse.propTypes = {
  children: PropTypes.node,
}

CAccordionCollapse.displayName = 'CAccordionCollapse'
