import React, { ChangeEventHandler, ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CFormControlProps
  extends HTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  classNameParent?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'input'
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component. [docs]
   */
  disabled?: boolean
  /**
   * Set component validation state to invalid. [docs]
   */
  invalid?: boolean
  /**
   * Method called immediately after the `value` prop changes. [docs]
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly` [docs]
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component. [docs]
   */
  readOnly?: boolean
  /**
   * Size the component small or large. [docs]
   *
   * @type 'sm' | 'lg'
   */
  size?: 'sm' | 'lg'
  /**
   * Specifies the type of component. [docs]
   *
   * @type 'color' | 'file' | 'text' | string
   * @default 'text'
   */
  type?: 'color' | 'file' | 'text' | string
  /**
   * Set component validation state to valid. [docs]
   */
  valid?: boolean
  /**
   * The `value` attribute of component. [docs]
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const CFormControl = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  CFormControlProps
>(
  (
    {
      children,
      className,
      classNameParent,
      component: Component = 'input',
      invalid,
      plainText,
      size,
      type = 'text',
      valid,
      ...rest
    },
    ref,
  ) => {
    const _className = classNameParent
      ? classNameParent
      : classNames(
          plainText ? 'form-control-plaintext' : 'form-control',
          {
            'form-control-color': type === 'color',
            'form-range': type === 'range',
            [`form-control-${size}`]: size,
            'is-invalid': invalid,
            'is-valid': valid,
          },
          className,
        )
    return (
      <Component
        {...(Component === 'input' && { type: type })}
        className={_className}
        {...rest}
        ref={ref}
      >
        {children}
      </Component>
    )
  },
)

CFormControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classNameParent: PropTypes.string,
  component: PropTypes.elementType,
  invalid: PropTypes.bool,
  plainText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
  valid: PropTypes.bool,
}

CFormControl.displayName = 'CFormControl'
