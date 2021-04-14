import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CModalDialogProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Align the modal in the center or top of the screen. [docs]
   *
   * @default 'top'
   */
  alignment?: 'top' | 'center'
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window. [docs]
   */
  scrollable?: boolean
  /**
   * Size the component small, large, or extra large. [docs]
   */
  size?: 'sm' | 'lg' | 'xl'
}

export const CModalDialog: FC<CModalDialogProps> = ({
  children,
  alignment,
  className,
  fullscreen,
  scrollable,
  size,
  ...rest
}) => {
  const _className = classNames(
    'modal-dialog',
    {
      'modal-dialog-centered': alignment === 'center',
      [typeof fullscreen === 'boolean'
        ? 'modal-fullscreen'
        : `modal-fullscreen-${fullscreen}-down`]: fullscreen,
      'modal-dialog-scrollable': scrollable,
      [`modal-${size}`]: size,
    },
    className,
  )

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}
