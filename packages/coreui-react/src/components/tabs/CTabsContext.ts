import { createContext } from 'react'

export interface CTabsContextProps {
  _activeItemKey?: number | string
  setActiveItemKey: React.Dispatch<React.SetStateAction<number | string | undefined>>
  id?: string
}

export const CTabsContext = createContext({} as CTabsContextProps)