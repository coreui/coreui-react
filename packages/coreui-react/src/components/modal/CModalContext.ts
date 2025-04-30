import { createContext } from 'react'

export interface CModalContextProps {
  visible?: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const CModalContext = createContext({} as CModalContextProps)
