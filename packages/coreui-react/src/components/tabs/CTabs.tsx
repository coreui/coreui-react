import React, { forwardRef, HTMLAttributes, useId, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CTabsContext } from './CTabsContext'

export interface CTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Controls the currently active tab.
   *
   * When provided, the component operates in a controlled mode.
   * You must handle tab switching manually by updating this prop.
   *
   * @example
   * const [activeTab, setActiveTab] = useState(0);
   * <CTabs activeItemKey={activeTab} onChange={setActiveTab} />
   */
  activeItemKey?: number | string

  /**
   * A string of all className you want applied to the base component.
   */
  className?: string

  /**
   * Sets the initially active tab when the component mounts.
   *
   * After initialization, the component manages active tab changes internally.
   *
   * Use `defaultActiveItemKey` for uncontrolled usage.
   *
   * @example
   * <CTabs defaultActiveItemKey={1} />
   */
  defaultActiveItemKey?: number | string

  /**
   * Callback fired when the active tab changes.
   *
   * - In controlled mode (`activeItemKey` provided), you must update `activeItemKey` yourself based on the value received.
   * - In uncontrolled mode, this callback is called after internal state updates.
   *
   * @param value - The newly selected tab key.
   *
   * @example
   * <CTabs onChange={(key) => console.log('Tab changed to', key)} />
   */
  onChange?: (value: number | string) => void
}

export const CTabs = forwardRef<HTMLDivElement, CTabsProps>(
  ({ children, activeItemKey, className, defaultActiveItemKey, onChange }, ref) => {
    const id = useId()
    const isControlled = activeItemKey !== undefined
    const [internalActiveItemKey, setInternalActiveItemKey] = useState<number | string | undefined>(
      () => (isControlled ? undefined : defaultActiveItemKey)
    )

    const currentActiveItemKey = isControlled ? activeItemKey : internalActiveItemKey

    const setActiveItemKey = (value: number | string) => {
      if (!isControlled) {
        setInternalActiveItemKey(value)
      }

      onChange?.(value)
    }

    return (
      <CTabsContext.Provider value={{ _activeItemKey: currentActiveItemKey, setActiveItemKey, id }}>
        <div className={classNames('tabs', className)} ref={ref}>
          {children}
        </div>
      </CTabsContext.Provider>
    )
  }
)

CTabs.propTypes = {
  activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  defaultActiveItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}

CTabs.displayName = 'CTabs'
