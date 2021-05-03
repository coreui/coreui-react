import React, { FC, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CDropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CDropdownDivider: FC<CDropdownDividerProps> = ({ className, ...rest }) => {
  const _className = classNames('dropdown-divider', className)

  return <hr className={_className} {...rest} />
}

CDropdownDivider.propTypes = {
  className: PropTypes.string,
}

CDropdownDivider.displayName = 'CDropdownDivider'
