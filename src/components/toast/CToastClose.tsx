import React, { ElementType, forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import { CToastContext } from './CToast'
import { CButtonClose, CButtonCloseProps } from '../button/CButtonClose'

export interface CToastCloseProps extends CButtonCloseProps {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
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
      <CButtonClose onClick={() => setVisible(false)} {...rest} ref={ref} />
    )
  },
)

CToastClose.propTypes = {
  ...CButtonClose.propTypes,
  component: PropTypes.elementType,
}

CToastClose.displayName = 'CToastClose'
