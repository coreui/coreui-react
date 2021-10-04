import React, { ElementType, forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { CToastContext } from './CToast'
import { CCloseButton, CCloseButtonProps } from '../close-button/CCloseButton'

export interface CToastCloseProps extends CCloseButtonProps {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CToastClose = forwardRef<HTMLButtonElement, CToastCloseProps>(
  ({ children, component: Component, ...rest }, ref) => {
    const { setVisible } = useContext(CToastContext)
    return Component ? (
      <Component onClick={() => setVisible(false)} {...rest} ref={ref}>
        {children}
      </Component>
    ) : (
      <CCloseButton onClick={() => setVisible(false)} {...rest} ref={ref} />
    )
  },
)

CToastClose.propTypes = {
  ...CCloseButton.propTypes,
  component: PropTypes.elementType,
}

CToastClose.displayName = 'CToastClose'
