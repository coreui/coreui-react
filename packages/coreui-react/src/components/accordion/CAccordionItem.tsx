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
import { mergeClassNames } from '../../utils'

export interface CAccordionItemContextProps {
  id: string
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
   * Allows overriding or extending the default CSS class names used in the accordion item component.
   * Accepts a partial object matching the shape of `ACCORDION_ITEM_CLASS_NAMES`, which includes:
   *
   * - `ACCORDION_ITEM`: Base class for an individual accordion item.
   *
   * Use this prop to customize the styles of specific parts of the accordion item.
   *
   * @example
   * const customClasses = {
   *   ACCORDION_ITEM: 'custom-item-class',
   * }
   * <CAccordionItem customClassNames={customClasses}>...</CAccordionItem>
   */
  customClassNames?: Partial<typeof ACCORDION_ITEM_CLASS_NAMES>

  /**
   * Item key.
   */
  itemKey?: number | string
}

export const ACCORDION_ITEM_CLASS_NAMES = {
  /**
   * Base class for an individual accordion item.
   */
  ACCORDION_ITEM: 'accordion-item',
}

export const CAccordionItem = forwardRef<HTMLDivElement, CAccordionItemProps>(
  ({ children, className, customClassNames, itemKey, ...rest }, ref) => {
    const id = useId()
    const _itemKey = useRef(itemKey ?? Math.random().toString(36).slice(2, 11))

    const { _activeItemKey, alwaysOpen, setActiveKey } = useContext(CAccordionContext)
    const [visible, setVisible] = useState(Boolean(_activeItemKey === _itemKey.current))

    const mergedClassNames = mergeClassNames<typeof ACCORDION_ITEM_CLASS_NAMES>(
      ACCORDION_ITEM_CLASS_NAMES,
      customClassNames,
    )

    useEffect(() => {
      if (!alwaysOpen && visible) {
        setActiveKey(_itemKey.current)
      }
    }, [visible])

    useEffect(() => {
      setVisible(Boolean(_activeItemKey === _itemKey.current))
    }, [_activeItemKey])

    return (
      <div className={classNames(mergedClassNames.ACCORDION_ITEM, className)} {...rest} ref={ref}>
        <CAccordionItemContext.Provider value={{ id, setVisible, visible }}>
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
