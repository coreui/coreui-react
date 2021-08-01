import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, Shapes } from '../Types'

import { CFormLabel } from './CFormLabel'

export type ButtonObject = {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Select the shape of the component. [docs]
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  shape?: Shapes
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  size?: 'sm' | 'lg'
  /**
   * Set the button variant to an outlined button or a ghost button. [docs]
   */
  variant?: 'outline' | 'ghost'
}

export interface CFormCheckProps extends HTMLAttributes<HTMLInputElement> {
  /**
   * Create button-like checkboxes and radio buttons
   */
  button?: ButtonObject
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * The id global attribute defines an identifier (ID) that must be unique in the whole document. [docs]
   */
  id?: string
  /**
   * Group checkboxes or radios on the same horizontal row by adding. [docs]
   */
  inline?: boolean
  /**
   * Set component validation state to invalid. [docs]
   */
  invalid?: boolean
  /**
   * The element represents a caption for a component. [docs]
   */
  label?: string | ReactNode
  /**
   * Specifies the type of component. [docs]
   *
   * @type checkbox' | 'radio'
   * @default 'checkbox'
   */
  type?: 'checkbox' | 'radio'
  /**
   * Set component validation state to valid. [docs]
   */
  valid?: boolean
}

export const CFormCheck = forwardRef<HTMLInputElement, CFormCheckProps>(
  ({ className, button, id, inline, invalid, label, type = 'checkbox', valid, ...rest }, ref) => {
    const _className = classNames(
      'form-check',
      {
        'form-check-inline': inline,
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )

    const inputClassName = classNames(button ? 'btn-check' : 'form-check-input', {
      'is-invalid': invalid,
      'is-valid': valid,
    })
    const labelClassName = classNames(
      button
        ? classNames(
            'btn',
            button.variant ? `btn-${button.variant}-${button.color}` : `btn-${button.color}`,
            {
              [`btn-${button.size}`]: button.size,
            },
            `${button.shape}`,
          )
        : 'form-check-label',
    )

    const formControl = () => {
      return <input type={type} className={inputClassName} id={id} {...rest} ref={ref} />
    }

    const formLabel = () => {
      return (
        <CFormLabel customClassName={labelClassName} {...(id && { htmlFor: id })}>
          {label}
        </CFormLabel>
      )
    }

    return button ? (
      <>
        {formControl()}
        {label && formLabel()}
      </>
    ) : label ? (
      <div className={_className}>
        {formControl()}
        {formLabel()}
      </div>
    ) : (
      formControl()
    )
  },
)

CFormCheck.propTypes = {
  button: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['checkbox', 'radio']),
  valid: PropTypes.bool,
}

CFormCheck.displayName = 'CFormCheck'
