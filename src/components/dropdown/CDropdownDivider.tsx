import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CDropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CDropdownDivider: FC<CDropdownDividerProps> = ({ className, ...rest }) => {
  const _className = classNames('dropdown-divider', className)

  return <hr className={_className} {...rest}/>
}
