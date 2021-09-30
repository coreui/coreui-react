import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionContext } from './CAccordion'

export interface CAccordionItemContextProps {
  setVisible: (a: boolean) => void
  visible?: boolean
}

export const CAccordionItemContext = createContext({} as CAccordionItemContextProps)

export interface CAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Item key.
   */
  itemKey?: number | string
}

export const CAccordionItem = forwardRef<HTMLDivElement, CAccordionItemProps>(
  ({ children, className, itemKey, ...rest }, ref) => {
    const _itemKey = useRef(itemKey ? itemKey : Math.random().toString(36).substr(2, 9))

    const { _activeItemKey, alwaysOpen, setActiveKey } = useContext(CAccordionContext)
    const [visible, setVisible] = useState(Boolean(_activeItemKey === _itemKey.current))

    useEffect(() => {
      !alwaysOpen && visible && setActiveKey(_itemKey.current)
    }, [visible])

    useEffect(() => {
      setVisible(Boolean(_activeItemKey === _itemKey.current))
    }, [_activeItemKey])

    const _className = classNames('accordion-item', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        <CAccordionItemContext.Provider value={{ setVisible, visible }}>
          {children}
        </CAccordionItemContext.Provider>
      </div>
    )
  },
)

CAccordionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  itemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CAccordionItem.displayName = 'CAccordionItem'
