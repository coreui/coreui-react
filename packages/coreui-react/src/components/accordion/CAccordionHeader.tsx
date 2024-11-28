import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionButton } from './CAccordionButton'
import { mergeClassNames } from '../../utils'

export interface CAccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Allows overriding or extending the default CSS class names used in the accordion header component.
   * Accepts a partial object matching the shape of `ACCORDION_HEADER_CLASS_NAMES`, which includes:
   *
   * - `ACCORDION_HEADER`: Base class for the accordion header container.
   * - `ACCORDION_BUTTON`: Class applied to the button within the accordion header.
   *
   * Use this prop to customize the styles of specific parts of the accordion header.
   *
   * @example
   * const customClasses = {
   *   ACCORDION_HEADER: 'custom-header-class',
   *   ACCORDION_BUTTON: 'custom-button-class',
   * }
   * <CAccordionHeader customClassNames={customClasses}>...</CAccordionHeader>
   */
  customClassNames?: Partial<typeof ACCORDION_HEADER_CLASS_NAMES>
}

export const ACCORDION_HEADER_CLASS_NAMES = {
  /**
   * Styles the header container of an accordion item.
   */
  ACCORDION_HEADER: 'accordion-header',

  /**
   * Styles the clickable element in the accordion header.
   */
  ACCORDION_BUTTON: 'accordion-button',
}

export const CAccordionHeader = forwardRef<HTMLDivElement, CAccordionHeaderProps>(
  ({ children, className, customClassNames, ...rest }, ref) => {
    const _classNames = mergeClassNames<typeof ACCORDION_HEADER_CLASS_NAMES>(
      ACCORDION_HEADER_CLASS_NAMES,
      customClassNames,
    )
    return (
      <div className={classNames(_classNames.ACCORDION_HEADER, className)} {...rest} ref={ref}>
        <CAccordionButton className={_classNames.ACCORDION_HEADER}>{children}</CAccordionButton>
      </div>
    )
  },
)

CAccordionHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CAccordionHeader.displayName = 'CAccordionHeader'
