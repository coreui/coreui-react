import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionItemContext } from './CAccordionItem'

import { CCollapse } from './../collapse/CCollapse'
import { mergeClassNames } from '../../utils'

export interface CAccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Allows you to apply custom CSS classes to the React Accordion Body for enhanced styling and theming.
   *
   * @example
   * <CAccordionBody className="custom-accordion-body">...</CAccordionBody>
   */
  className?: string

  /**
   * Allows overriding or extending the default CSS class names used in the accordion body component.
   * Accepts a partial object matching the shape of `ACCORDION_BODY_CLASS_NAMES`, which includes:
   *
   * - `ACCORDION_COLLAPSE`: Base class for the collapse container in the accordion body.
   * - `ACCORDION_BODY`: Base class for the main content container inside the accordion body.
   *
   * Use this prop to customize the styles of specific parts of the accordion body.
   *
   * @example
   * const customClasses = {
   *   ACCORDION_COLLAPSE: 'custom-collapse-class',
   *   ACCORDION_BODY: 'custom-body-class',
   * }
   * <CAccordionBody customClassNames={customClasses}>...</CAccordionBody>
   */
  customClassNames?: Partial<typeof ACCORDION_BODY_CLASS_NAMES>
}

export const ACCORDION_BODY_CLASS_NAMES = {
  /**
   * Used for managing collapsible behavior in the accordion body.
   */
  ACCORDION_COLLAPSE: 'accordion-collapse',

  /**
   * Styles the main content container inside the accordion.
   */
  ACCORDION_BODY: 'accordion-body',
}

export const CAccordionBody = forwardRef<HTMLDivElement, CAccordionBodyProps>(
  ({ children, className, customClassNames, ...rest }, ref) => {
    const { id, visible } = useContext(CAccordionItemContext)

    const _classNames = mergeClassNames<typeof ACCORDION_BODY_CLASS_NAMES>(
      ACCORDION_BODY_CLASS_NAMES,
      customClassNames,
    )

    return (
      <CCollapse id={id} className={_classNames.ACCORDION_COLLAPSE} visible={visible}>
        <div className={classNames(_classNames.ACCORDION_BODY, className)} {...rest} ref={ref}>
          {children}
        </div>
      </CCollapse>
    )
  },
)

CAccordionBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CAccordionBody.displayName = 'CAccordionBody'
