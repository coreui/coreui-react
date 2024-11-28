import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionItemContext } from './CAccordionItem'

import { mergeClassNames } from '../../utils'

export interface CAccordionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Styles the clickable element in the accordion header.
   */
  className?: string

  /**
   * Allows overriding or extending the default CSS class names used in the accordion button component.
   * Accepts a partial object matching the shape of `CLASS_NAMES`, which includes:
   *
   * - `ACCORDION_BUTTON`: Base class for the accordion button.
   *
   * Use this prop to customize the styles of the accordion button.
   *
   * @example
   * const customClasses = {
   *   ACCORDION_BUTTON: 'custom-button-class',
   * }
   * <CAccordionButton customClassNames={customClasses}>...</CAccordionButton>
   */
  customClassNames?: Partial<typeof CLASS_NAMES>
}

export const CLASS_NAMES = {
  ACCORDION_BUTTON: 'accordion-button',
}

export const CAccordionButton = forwardRef<HTMLButtonElement, CAccordionButtonProps>(
  ({ children, className, customClassNames, ...rest }, ref) => {
    const { id, visible, setVisible } = useContext(CAccordionItemContext)
    const _classNames = mergeClassNames<typeof CLASS_NAMES>(CLASS_NAMES, customClassNames)

    return (
      <button
        type="button"
        className={classNames(_classNames.ACCORDION_BUTTON, { collapsed: !visible }, className)}
        aria-controls={id}
        aria-expanded={visible}
        onClick={() => setVisible(!visible)}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

CAccordionButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CAccordionButton.displayName = 'CAccordionButton'
