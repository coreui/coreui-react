import { createContext } from 'react'

export interface CSidebarNavContextProps {
  visibleGroup: string
  setVisibleGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const CSidebarNavContext = createContext({} as CSidebarNavContextProps)
