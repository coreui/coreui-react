import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CDropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const CDropdownDivider = forwardRef<HTMLHRElement, CDropdownDividerProps>(
  ({ className, ...rest }, ref) => {
    const _className = classNames('dropdown-divider', className)

    return <hr className={_className} {...rest} ref={ref} />
  },
)

CDropdownDivider.propTypes = {
  className: PropTypes.string,
}

CDropdownDivider.displayName = 'CDropdownDivider'
