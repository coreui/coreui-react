import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CAccordionContext } from './CAccordion'

export interface CAccordionItemContextProps {
  id: string
  setVisible: (a: boolean) => void
  visible?: boolean
}

export const CAccordionItemContext = createContext({} as CAccordionItemContextProps)

export interface CAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The id global attribute defines an identifier (ID) that must be unique in the whole document.
   */
  id?: string
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
  ({ children, className, id, itemKey, ...rest }, ref) => {
    const _id = id ?? useId()
    const _itemKey = useRef(itemKey ?? _id)

    const { _activeItemKey, alwaysOpen, setActiveKey } = useContext(CAccordionContext)
    const [visible, setVisible] = useState(Boolean(_activeItemKey === _itemKey.current))

    useEffect(() => {
      if (!alwaysOpen && visible) {
        setActiveKey(_itemKey.current)
      }
    }, [visible])

    useEffect(() => {
      setVisible(Boolean(_activeItemKey === _itemKey.current))
    }, [_activeItemKey])

    return (
      <div className={classNames('accordion-item', className)} {...rest} ref={ref}>
        <CAccordionItemContext.Provider value={{ id: _id, setVisible, visible }}>
          {children}
        </CAccordionItemContext.Provider>
      </div>
    )
  }
)

CAccordionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  itemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

CAccordionItem.displayName = 'CAccordionItem'
