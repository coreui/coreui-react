import React, { forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionContext } from './CAccordionContext'

export interface CAccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The active item key.
   */
  activeItemKey?: number | string
  /**
   * Make accordion items stay open when another item is opened
   */
  alwaysOpen?: boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   */
  flush?: boolean
}

export const CAccordion = forwardRef<HTMLDivElement, CAccordionProps>(
  ({ children, activeItemKey, alwaysOpen = false, className, flush, ...rest }, ref) => {
    const [_activeItemKey, setActiveKey] = useState(activeItemKey)

    return (
      <div
        className={classNames('accordion', { 'accordion-flush': flush }, className)}
        {...rest}
        ref={ref}
      >
        <CAccordionContext.Provider value={{ _activeItemKey, alwaysOpen, setActiveKey }}>
          {children}
        </CAccordionContext.Provider>
      </div>
    )
  },
)

CAccordion.propTypes = {
  activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alwaysOpen: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  flush: PropTypes.bool,
}

CAccordion.displayName = 'CAccordion'
