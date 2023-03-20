import React, { FC, HTMLAttributes, ReactNode, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { usePopper } from 'react-popper'
import { Transition } from 'react-transition-group'

import { triggerPropType } from '../../props'
import type { Triggers } from '../../types'

export interface CPopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Content node for your component.
   */
  content: ReactNode | string
  /**
   * Offset of the popover relative to its target.
   */
  offset?: [number, number]
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Title node for your component.
   */
  title?: ReactNode | string
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   *
   * @type 'hover' | 'focus' | 'click'
   */
  trigger?: Triggers | Triggers[]
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   */
  placement?: 'auto' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * Toggle the visibility of popover component.
   */
  visible?: boolean
}

export const CPopover: FC<CPopoverProps> = ({
  children,
  className,
  content,
  offset = [0, 8],
  onHide,
  onShow,
  placement = 'top',
  title,
  trigger = 'click',
  visible,
  ...rest
}) => {
  const [_visible, setVisible] = useState(visible)
  const popoverRef = useRef()

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: offset,
        },
      },
    ],
    placement: placement,
  })

  useEffect(() => {
    setVisible(visible)
  }, [visible])

  return (
    <>
      {React.cloneElement(children as React.ReactElement<any>, {
        ref: setReferenceElement,
        ...((trigger === 'click' || trigger.includes('click')) && {
          onClick: () => setVisible(!_visible),
        }),
        ...((trigger === 'focus' || trigger.includes('focus')) && {
          onFocus: () => setVisible(true),
          onBlur: () => setVisible(false),
        }),
        ...((trigger === 'hover' || trigger.includes('hover')) && {
          onMouseEnter: () => setVisible(true),
          onMouseLeave: () => setVisible(false),
        }),
      })}
      {typeof window !== 'undefined' &&
        createPortal(
          <Transition
            in={_visible}
            mountOnEnter
            nodeRef={popoverRef}
            onEnter={onShow}
            onExit={onHide}
            timeout={{
              enter: 0,
              exit: 200,
            }}
            unmountOnExit
          >
            {(state) => (
              <div
                className={classNames(
                  'popover',
                  `bs-popover-${placement.replace('left', 'start').replace('right', 'end')}`,
                  'fade',
                  {
                    show: state === 'entered',
                  },
                  className,
                )}
                ref={setPopperElement}
                role="tooltip"
                style={styles.popper}
                {...attributes.popper}
                {...rest}
              >
                <div className="popover-arrow" style={styles.arrow} ref={setArrowElement}></div>
                <div className="popover-header">{title}</div>
                <div className="popover-body">{content}</div>
              </div>
            )}
          </Transition>,
          document.body,
        )}
    </>
  )
}

CPopover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  offset: PropTypes.any, // TODO: find good proptype
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'left']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  trigger: triggerPropType,
  visible: PropTypes.bool,
}

CPopover.displayName = 'CPopover'
