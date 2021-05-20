import React, { FC, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Reference } from 'react-popper'

import { Triggers, triggerPropType } from '../Types'

import { CButton, CButtonProps } from '../button/CButton'
import { CDropdownContext } from './CDropdown'

export interface CDropdownToggleProps extends CButtonProps {
  /**
   * Enables pseudo element caret on toggler. [docs]
   *
   * @default true
   */
  caret?: boolean
  /**
   * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. [docs]
   */
  split?: boolean
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. [docs]
   */
  trigger?: Triggers | Triggers[]
}

export const CDropdownToggle: FC<CDropdownToggleProps> = ({
  children,
  caret = true,
  className,
  split,
  trigger = 'click',
  ...rest
}) => {
  const { popper, variant, visible, setVisible } = useContext(CDropdownContext)
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
    // TODO: consider to add in future releases
    // ...((trigger === 'hover' || trigger.includes('hover')) && {
    //   onMouseEnter: () => setVisible(true),
    //   onMouseLeave: () => setVisible(false),
    // }),
  }

  const togglerProps = {
    className: _className,
    'aria-expanded': visible,
    ...triggers,
  }

  // TODO: find solution
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Toggler = (ref?: React.Ref<any>) => {
    return variant === 'nav-item' ? (
      <a href="#" {...togglerProps} ref={ref}>
        {children}
      </a>
    ) : (
      <CButton {...togglerProps} tabIndex={0} {...rest} ref={ref}>
        {children}
        {split && <span className="visually-hidden">Toggle Dropdown</span>}
      </CButton>
    )
  }

  return popper ? <Reference>{({ ref }) => Toggler(ref)}</Reference> : Toggler()
}

CDropdownToggle.propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  split: PropTypes.bool,
  trigger: triggerPropType,
}

CDropdownToggle.displayName = 'CDropdownToggle'
