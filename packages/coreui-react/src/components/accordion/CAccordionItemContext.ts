import { createContext } from 'react'

export interface CAccordionItemContextProps {
  id: string
  setVisible: (a: boolean) => void
  visible?: boolean
}

export const CAccordionItemContext = createContext({} as CAccordionItemContextProps)
