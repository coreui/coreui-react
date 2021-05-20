import React, { forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { Colors, colorPropType } from '../Types'
import { CButtonClose } from '../button/CButtonClose'

export interface CAlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string }
   * @default 'primary'
   */
  color: Colors
  /**
   * Optionally add a close button to alert and allow it to self dismiss. [docs]
   */
  dismissible?: boolean
  /**
   * Method called before the dissmiss animation has started. [docs]
   */
  onDismiss?: () => void
  /**
   * Method called after the dissmiss animation has completed and the component is removed from the dom. [docs]
   */
  onDismissed?: () => void
  /**
   * Set the alert variant to a solid. [docs]
   */
  variant?: 'solid' | string
  /**
   * Toggle the visibility of component. [docs]
   *
   * @default true
   */
  visible?: boolean
}

export const CAlert = forwardRef<HTMLDivElement, CAlertProps>(
  (
    {
      children,
      className,
      color = 'primary',
      dismissible,
      variant,
      visible = true,
      onDismiss,
      onDismissed,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState(visible)

    const _className = classNames(
      'alert',
      variant === 'solid' ? `bg-${color} text-white` : `alert-${color}`,
      {
        'alert-dismissible fade': dismissible,
        show: _visible && dismissible,
      },
      className,
    )

    return (
      <CSSTransition
        in={_visible}
        timeout={150}
        onExit={onDismiss}
        onExited={onDismissed}
        unmountOnExit
      >
        <div className={_className} role="alert" {...rest} ref={ref}>
          {children}
          {dismissible && <CButtonClose onClick={() => setVisible(false)} />}
        </div>
      </CSSTransition>
    )
  },
)

CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType.isRequired,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
  onDismissed: PropTypes.func,
  variant: PropTypes.string,
  visible: PropTypes.bool,
}

CAlert.displayName = 'CAlert'
