import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { mergeClassNames } from '../../utils'

export interface CAccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determines which accordion item is currently active (expanded) by default.
   * Accepts a number or string corresponding to the `itemKey` of the desired accordion item.
   *
   * @example
   * <CAccordion activeItemKey="1">...</CAccordion>
   */
  activeItemKey?: number | string

  /**
   * When set to `true`, multiple accordion items within the React Accordion can be open simultaneously.
   * This is ideal for scenarios where users need to view multiple sections at once without collapsing others.
   *
   * @default false
   *
   * @example
   * <CAccordion alwaysOpen>...</CAccordion>
   */
  alwaysOpen?: boolean

  /**
   * Allows you to apply custom CSS classes to the React Accordion for enhanced styling and theming.
   *
   * @example
   * <CAccordion className="my-custom-accordion">...</CAccordion>
   */
  className?: string

  /**
   * Allows overriding or extending the default CSS class names used in the component.
   *
   * - `ACCORDION`: Base class for the accordion component.
   * - `ACCORDION_FLUSH`: Class applied when the `flush` prop is set to true, ensuring an edge-to-edge layout.
   *
   * Use this prop to customize the styles of specific parts of the accordion.
   *
   * @example
   * const customClasses = {
   *   ACCORDION: 'custom-accordion',
   *   ACCORDION_FLUSH: 'custom-accordion-flush'
   * }
   * <CAccordion customClassNames={customClasses}>...</CAccordion>
   */
  customClassNames?: Partial<typeof ACCORDION_CLASS_NAMES>

  /**
   * When `flush` is set to `true`, the React Accordion renders edge-to-edge with its parent container,
   * creating a seamless and modern look ideal for minimalist designs.
   *
   * @default false
   *
   * @example
   * <CAccordion flush>...</CAccordion>
   */
  flush?: boolean
}

export const ACCORDION_CLASS_NAMES = {
  /**
   * Base class for the accordion container.
   */
  ACCORDION: 'accordion',

  /**
   * Applied when the `flush` prop is enabled.
   */
  ACCORDION_FLUSH: 'accordion-flush',
}

export interface CAccordionContextProps {
  _activeItemKey?: number | string
  alwaysOpen?: boolean
  setActiveKey: React.Dispatch<React.SetStateAction<number | string | undefined>>
}

export const CAccordionContext = createContext({} as CAccordionContextProps)

export const CAccordion = forwardRef<HTMLDivElement, CAccordionProps>(
  (
    { children, activeItemKey, alwaysOpen = false, className, customClassNames, flush, ...rest },
    ref,
  ) => {
    const [_activeItemKey, setActiveKey] = useState(activeItemKey)

    const _classNames = mergeClassNames<typeof ACCORDION_CLASS_NAMES>(
      ACCORDION_CLASS_NAMES,
      customClassNames,
    )

    return (
      <div
        className={classNames(
          _classNames.ACCORDION,
          { [_classNames.ACCORDION_FLUSH]: flush },
          className,
        )}
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
  alwaysOpen: PropTypes.bool,
  activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  flush: PropTypes.bool,
}

CAccordion.displayName = 'CAccordion'
