import { createContext } from 'react'

export interface CAccordionContextProps {
  _activeItemKey?: number | string
  alwaysOpen?: boolean
  setActiveKey: React.Dispatch<React.SetStateAction<number | string | undefined>>
}

export const CAccordionContext = createContext({} as CAccordionContextProps)
