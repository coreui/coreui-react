import { createContext } from 'react'

export interface CToastContextProps {
  visible?: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const CToastContext = createContext({} as CToastContextProps)
