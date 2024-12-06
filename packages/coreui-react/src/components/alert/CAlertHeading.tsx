import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { PolymorphicRefForwardingComponent } from '../../helpers'
import { mergeClassNames } from '../../utils'

export interface CAlertHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The component used for the root node. It can be a string representing a HTML element or a React component.
   *
   * @default 'h4'
   *
   * @example
   * // Using default 'h4' element
   * <CAlertHeading>Alert Heading</CAlertHeading>
   *
   * // Using a custom component
   * const CustomHeading = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
   *   <div ref={ref} {...props} />
   * ))
   *
   * <CAlertHeading as={CustomHeading}>Custom Alert Heading</CAlertHeading>
   */
  as?: ElementType

  /**
   * A string of additional CSS class names to apply to the React Alert Heading component.
   *
   * @example
   * <CAlertHeading className="my-custom-class">Custom Class Alert Heading</CAlertHeading>
   */
  className?: string

  /**
   * Custom class names to override or extend the default CSS classes used within the `CAlertHeading` component.
   * Each key corresponds to a specific part of the React Alert Heading component, allowing for granular styling control.
   *
   * @since v5.0.0
   *
   * @example
   * const customClasses = {
   *   ALERT_HEADING: 'my-custom-alert-heading',
   * }
   *
   * <CAlertHeading customClassNames={customClasses}>
   *   Custom Styled Alert Heading
   * </CAlertHeading>
   */
  customClassNames?: Partial<typeof ALERT_HEADING_CLASS_NAMES>
}

export const ALERT_HEADING_CLASS_NAMES = {
  /**
   * Base class for the React Alert Heading container.
   */
  ALERT_HEADING: 'alert-heading',
}

export const CAlertHeading: PolymorphicRefForwardingComponent<'h4', CAlertHeadingProps> =
  forwardRef<HTMLHeadingElement, CAlertHeadingProps>(
    ({ children, as: Component = 'h4', className, customClassNames, ...rest }, ref) => {
      const mergedClassNames = mergeClassNames<typeof ALERT_HEADING_CLASS_NAMES>(
        ALERT_HEADING_CLASS_NAMES,
        customClassNames,
      )

      return (
        <Component
          className={classNames(mergedClassNames.ALERT_HEADING, className)}
          {...rest}
          ref={ref}
        >
          {children}
        </Component>
      )
    },
  )

CAlertHeading.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  customClassNames: PropTypes.object,
}

CAlertHeading.displayName = 'CAlertHeading'
