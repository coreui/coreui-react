import React, { forwardRef, HTMLAttributes, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { CCloseButton } from '../close-button/CCloseButton'

import { useForkedRef } from '../../hooks'
import { colorPropType } from '../../props'
import type { Colors } from '../../types'
import { mergeClassNames } from '../../utils'

export interface CAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Apply a CSS fade transition to the alert.
   *
   * @since 5.5.0
   *
   * @example
   * <CAlert animation={false} color="success">No animation alert</CAlert>
   */
  animation?: boolean

  /**
   * A string of additional CSS class names to apply to the alert component.
   *
   * @example
   * <CAlert className="my-custom-class" color="danger">Custom Class Alert</CAlert>
   */
  className?: string

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   *
   * @example
   * <CAlert color="warning">Warning Alert</CAlert>
   */
  color: Colors

  /**
   * Custom class names to override or extend the default CSS classes used within the `CAlert` component.
   * Each key corresponds to a specific part of the Alert component, allowing for granular styling control.
   *
   * @since v5.5.0
   *
   * @example
   * const customClasses = {
   *   ALERT: 'my-custom-alert',
   *   ALERT_DISMISSIBLE: 'my-custom-dismissible',
   * }
   *
   * <CAlert customClassNames={customClasses} />
   */
  customClassNames?: Partial<typeof ALERT_CLASS_NAMES>

  /**
   * Optionally add a close button to the alert and allow it to self-dismiss.
   *
   * @example
   * <CAlert dismissible color="success">
   *   Dismissible Alert
   * </CAlert>
   */
  dismissible?: boolean

  /**
   * Callback fired when the alert requests to be closed. This occurs when the close button is clicked.
   *
   * @example
   * const handleClose = () => {
   *   console.log('Alert closed')
   * }
   *
   * <CAlert dismissible color="danger" onClose={handleClose}>
   *   Dismissible Alert with Callback
   * </CAlert>
   */
  onClose?: () => void

  /**
   * Set the alert variant to a solid background. This changes the alert's appearance to have a solid color.
   *
   * @example
   * <CAlert variant="solid" color="primary">
   *   Solid Variant Alert
   * </CAlert>
   */
  variant?: 'solid' | string

  /**
   * Toggle the visibility of the alert component. When set to `false`, the alert will be hidden.
   *
   * @example
   * const [visible, setVisible] = useState(true)
   *
   * <CAlert visible={visible} onClose={() => setVisible(false)} color="info">
   *   Toggleable Alert
   * </CAlert>
   */
  visible?: boolean
}

export const ALERT_CLASS_NAMES = {
  /**
   * Base class for the alert container.
   */
  ALERT: 'alert',

  /**
   * Applied when the `dismissible` prop is enabled.
   */
  ALERT_DISMISSIBLE: 'alert-dismissible',
}

export const CAlert = forwardRef<HTMLDivElement, CAlertProps>(
  (
    {
      children,
      animation = true,
      className,
      color = 'primary',
      customClassNames,
      dismissible,
      variant,
      visible = true,
      onClose,
      ...rest
    },
    ref,
  ) => {
    const alertRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, alertRef)
    const [_visible, setVisible] = useState(visible)

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    const mergedClassNames = mergeClassNames<typeof ALERT_CLASS_NAMES>(
      ALERT_CLASS_NAMES,
      customClassNames,
    )

    return (
      <Transition
        in={_visible}
        mountOnEnter
        nodeRef={alertRef}
        onExit={onClose}
        timeout={150}
        unmountOnExit
      >
        {(state) => (
          <div
            className={classNames(
              mergedClassNames.ALERT,
              variant === 'solid' ? `bg-${color} text-white` : `alert-${color}`,
              {
                [mergedClassNames.ALERT_DISMISSIBLE]: dismissible,
                fade: animation,
                show: state === 'entered',
              },
              className,
            )}
            role="alert"
            {...rest}
            ref={forkedRef}
          >
            {children}
            {dismissible && <CCloseButton onClick={() => setVisible(false)} />}
          </div>
        )}
      </Transition>
    )
  },
)

CAlert.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType.isRequired,
  customClassNames: PropTypes.object,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.string,
  visible: PropTypes.bool,
}

CAlert.displayName = 'CAlert'
