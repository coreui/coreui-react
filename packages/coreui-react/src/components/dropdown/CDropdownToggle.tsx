import React, { FC, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Reference } from 'react-popper'

import { useForkedRef } from '../../utils/hooks'

import { Triggers, triggerPropType } from '../Types'

import { CButton, CButtonProps } from '../button/CButton'
import { CDropdownContext } from './CDropdown'

export interface CDropdownToggleProps extends Omit<CButtonProps, 'type'> {
  /**
   * Enables pseudo element caret on toggler.
   */
  caret?: boolean
  /**
   * Create a custom toggler which accepts any content.
   */
  custom?: boolean
  /**
   * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
   */
  split?: boolean
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   *
   * @type 'hover' | 'focus' | 'click'
   */
  trigger?: Triggers | Triggers[]
}

export const CDropdownToggle: FC<CDropdownToggleProps> = ({
  children,
  caret = true,
  custom,
  className,
  split,
  trigger = 'click',
  ...rest
}) => {
  const { dropdownToggleRef, popper, variant, visible, setVisible } = useContext(CDropdownContext)
  const _className = classNames(
    {
      'dropdown-toggle': caret,
      'dropdown-toggle-split': split,
      'nav-link': variant === 'nav-item',
    },
    className,
  )

  const triggers = {
    ...((trigger === 'click' || trigger.includes('click')) && {
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setVisible(!visible)
      },
    }),
    ...((trigger === 'focus' || trigger.includes('focus')) && {
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
    }),
  }

  const togglerProps = {
    className: _className,
    'aria-expanded': visible,
    ...(!rest.disabled && { ...triggers }),
    ...triggers,
  }

  // We use any because Toggler can be `a` as well as `button`.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Toggler = (ref?: React.Ref<any>) => {
    return custom && React.isValidElement(children) ? (
      <>
        {React.cloneElement(children as React.ReactElement<any>, {
          'aria-expanded': visible,
          ...(!rest.disabled && { ...triggers }),
          ref: useForkedRef(ref, dropdownToggleRef),
        })}
      </>
    ) : variant === 'nav-item' ? (
      <a href="#" {...togglerProps} ref={useForkedRef(ref, dropdownToggleRef)}>
        {children}
      </a>
    ) : (
      <CButton
        type="button"
        {...togglerProps}
        tabIndex={0}
        {...rest}
        ref={useForkedRef(ref, dropdownToggleRef)}
      >
        {children}
        {split && <span className="visually-hidden">Toggle Dropdown</span>}
      </CButton>
    )
  }

  return popper ? <Reference>{({ ref }) => Toggler(ref)}</Reference> : Toggler(dropdownToggleRef)
}

CDropdownToggle.propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  split: PropTypes.bool,
  trigger: triggerPropType,
}

CDropdownToggle.displayName = 'CDropdownToggle'
