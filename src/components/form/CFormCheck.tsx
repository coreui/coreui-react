import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, Shapes, colorPropType, shapePropType } from '../Types'

import { CFormControl } from './CFormControl'
import { CFormLabel } from './CFormLabel'

export interface CFormCheckProps extends HTMLAttributes<HTMLInputElement> {
  button?: boolean
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  buttonColor?: Colors
  /**
   * Select the shape of the component. [docs]
   *
   * @type 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string
   */
  buttonShape?: Shapes
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  buttonSize?: 'sm' | 'lg'
  /**
   * Set the button variant to an outlined button or a ghost button. [docs]
   */
  buttonVariant?: 'outline' | 'ghost'
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
  label?: string
  /**
   * Size the component large or extra large. Works only with `switch` [docs]
   *
   * @type 'lg' | 'xl'
   */
  size?: 'lg' | 'xl'
  /**
   * Render component as a toggle switch. [docs]
   */
  switch?: boolean
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
  (
    {
      className,
      button,
      buttonColor = 'primary',
      buttonSize,
      buttonShape,
      buttonVariant,
      id,
      inline,
      invalid,
      label,
      size,
      switch: _switch,
      type = 'checkbox',
      valid,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      'form-check',
      {
        'form-switch': _switch,
        [`form-switch-${size}`]: size,
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
            buttonVariant ? `btn-${buttonVariant}-${buttonColor}` : `btn-${buttonColor}`,
            {
              [`btn-${buttonSize}`]: buttonSize,
              buttonShape,
            },
          )
        : 'form-check-label',
    )

    const formControl = () => {
      return (
        <CFormControl type={type} classNameParent={inputClassName} id={id} {...rest} ref={ref} />
      )
    }

    const formLabel = () => {
      return (
        <CFormLabel classNameParent={labelClassName} {...(id && { htmlFor: id })}>
          {label}
        </CFormLabel>
      )
    }

    return _switch ? (
      <div className={_className}>
        {formControl()}
        {label && formLabel()}
      </div>
    ) : button ? (
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
  button: PropTypes.bool,
  buttonColor: colorPropType,
  buttonShape: shapePropType,
  buttonSize: PropTypes.oneOf(['sm', 'lg']),
  buttonVariant: PropTypes.oneOf(['outline', 'ghost']),
  className: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'xl']),
  switch: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  valid: PropTypes.bool,
}

CFormCheck.displayName = 'CFormCheck'
