import React, { ElementType, FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'h5'
   */
  component?: string | ElementType
}

export const CModalTitle: FC<CModalTitleProps> = ({
  children,
  component: Component = 'h5',
  className,
  ...rest
}) => {
  const _className = classNames('modal-title', className)

  return (
    <Component className={_className} {...rest}>
      {children}
    </Component>
  )
}
