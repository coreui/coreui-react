import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Manager } from 'react-popper'

import { Placements, placementPropType } from '../Types'
import { useForkedRef } from '../../utils/hooks'

export type Directions = 'start' | 'end'

export type Breakpoints =
  | { xs: Directions }
  | { sm: Directions }
  | { md: Directions }
  | { lg: Directions }
  | { xl: Directions }
  | { xxl: Directions }

export type Alignments = Directions | Breakpoints

export interface CDropdownProps extends HTMLAttributes<HTMLDivElement | HTMLLIElement> {
  /**
   * Set aligment of dropdown menu.
   *
   * @type 'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}
   */
  alignment?: Alignments
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Sets a darker color scheme to match a dark navbar.
   */
  dark?: boolean
  /**
   * Sets a specified  direction and location of the dropdown menu.
   *
   * @type 'dropup' | 'dropend' | 'dropstart'
   */
  direction?: 'dropup' | 'dropend' | 'dropstart'
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   *
   * @type 'auto' | 'top-end' | 'top' | 'top-start' | 'bottom-end' | 'bottom' | 'bottom-start' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left' | 'left-end'
   */
  placement?: Placements
  /**
   * If you want to disable dynamic positioning set this property to `true`.
   */
  popper?: boolean
  /**
   * Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.
   */
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'
  /**
   * Toggle the visibility of dropdown menu component.
   */
  visible?: boolean
}

interface ContextProps extends CDropdownProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const CDropdownContext = createContext({} as ContextProps)

export const CDropdown = forwardRef<HTMLDivElement | HTMLLIElement, CDropdownProps>(
  (
    {
      children,
      alignment,
      className,
      dark,
      direction,
      onHide,
      onShow,
      placement = 'bottom-start',
      popper = true,
      variant = 'btn-group',
      component = 'div',
      visible = false,
      ...rest
    },
    ref,
  ) => {
    const [_visible, setVisible] = useState(visible)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const forkedRef = useForkedRef(ref, dropdownRef)

    const Component = variant === 'nav-item' ? 'li' : component

    // Disable popper if responsive aligment is set.
    if (typeof alignment === 'object') {
      popper = false
    }

    const contextValues = {
      alignment,
      dark,
      direction: direction,
      placement: placement,
      popper,
      variant,
      visible: _visible,
      setVisible,
    }

    const _className = classNames(
      variant === 'nav-item' ? 'nav-item dropdown' : variant,
      {
        show: _visible,
      },
      direction,
      className,
    )

    useEffect(() => {
      _visible &&
        setTimeout(() => {
          window.addEventListener('click', handleClickOutside)
          window.addEventListener('keyup', handleKeyup)
        })

      return () => {
        window.removeEventListener('click', handleClickOutside)
        window.removeEventListener('keyup', handleKeyup)
      }
    }, [_visible])

    useEffect(() => {
      setVisible(visible)
    }, [visible])

    useEffect(() => {
      _visible && onShow && onShow()
      !_visible && onHide && onHide()
    }, [_visible])

    const handleKeyup = (event: Event) => {
      if (!dropdownRef.current?.contains(event.target as HTMLElement)) {
        setVisible(false)
      }
    }
    const handleClickOutside = (event: Event) => {
      if (!dropdownRef.current?.contains(event.target as HTMLElement)) {
        setVisible(false)
      }
    }

    const dropdownContent = () => {
      return variant === 'input-group' ? (
        <>{children}</>
      ) : (
        <Component className={_className} {...rest} ref={forkedRef}>
          {children}
        </Component>
      )
    }

    return popper ? (
      <CDropdownContext.Provider value={contextValues}>
        <Manager>{dropdownContent()}</Manager>
      </CDropdownContext.Provider>
    ) : (
      <CDropdownContext.Provider value={contextValues}>
        {dropdownContent()}
      </CDropdownContext.Provider>
    )
  },
)

const alignmentDirection = PropTypes.oneOf<Directions>(['start', 'end'])

CDropdown.propTypes = {
  // @ts-expect-error TODO: we have to find a solution
  alignment: PropTypes.oneOfType([
    alignmentDirection,
    PropTypes.shape({ xs: alignmentDirection }),
    PropTypes.shape({ sm: alignmentDirection }),
    PropTypes.shape({ md: alignmentDirection }),
    PropTypes.shape({ lg: alignmentDirection }),
    PropTypes.shape({ xl: alignmentDirection }),
    PropTypes.shape({ xxl: alignmentDirection }),
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(['dropup', 'dropend', 'dropstart']),
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: placementPropType,
  popper: PropTypes.bool,
  variant: PropTypes.oneOf(['btn-group', 'dropdown', 'input-group', 'nav-item']),
  visible: PropTypes.bool,
}

CDropdown.displayName = 'CDropdown'
