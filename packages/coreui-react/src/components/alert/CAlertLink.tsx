import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CLink } from '../link/CLink'
import { mergeClassNames } from '../../utils'

export interface CAlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of additional CSS class names to apply to the alert link component.
   *
   * @example
   * <CAlertLink className="my-custom-link">Custom Styled Link</CAlertLink>
   */
  className?: string

  /**
   * Custom class names to override or extend the default CSS classes used within the `CAlertLink` component.
   * Each key corresponds to a specific part of the React Alert Link component, allowing for granular styling control.
   *
   * @since v5.0.0
   *
   * @example
   * const customClasses = {
   *   ALERT_LINK: 'my-custom-alert-link',
   * }
   *
   * <CAlertLink customClassNames={customClasses} href="#">
   *   Custom Class Alert Link
   * </CAlertLink>
   */
  customClassNames?: Partial<typeof ALERT_LINK_CLASS_NAMES>
}

export const ALERT_LINK_CLASS_NAMES = {
  /**
   * Base class for the React alert link.
   */
  ALERT_LINK: 'alert-link',
}

export const CAlertLink = forwardRef<HTMLAnchorElement, CAlertLinkProps>(
  ({ children, className, customClassNames, ...rest }, ref) => {
    const mergedClassNames = mergeClassNames<typeof ALERT_LINK_CLASS_NAMES>(
      ALERT_LINK_CLASS_NAMES,
      customClassNames,
    )

    return (
      <CLink className={classNames(mergedClassNames.ALERT_LINK, className)} {...rest} ref={ref}>
        {children}
      </CLink>
    )
  },
)

CAlertLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customClassNames: PropTypes.object,
}

CAlertLink.displayName = 'CAlertLink'
