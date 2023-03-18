import React, { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

export interface CConditionalPortalProps {
  /**
   * @ignore
   */
  children: ReactNode
  /**
   * Render some children into a different part of the DOM
   */
  portal: boolean
}

export const CConditionalPortal: FC<CConditionalPortalProps> = ({ children, portal }) => {
  return typeof window !== 'undefined' && portal ? (
    createPortal(children, document.body)
  ) : (
    <>{children}</>
  )
}

CConditionalPortal.propTypes = {
  children: PropTypes.node,
  portal: PropTypes.bool.isRequired,
}

CConditionalPortal.displayName = 'CConditionalPortal'
