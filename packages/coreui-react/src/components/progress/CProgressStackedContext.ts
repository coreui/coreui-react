import { createContext } from 'react'

export interface CProgressStackedContextProps {
  stacked?: boolean
}

export const CProgressStackedContext = createContext({} as CProgressStackedContextProps)
