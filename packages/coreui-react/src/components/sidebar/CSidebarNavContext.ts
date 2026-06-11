import { createContext, Dispatch, SetStateAction } from 'react'

export interface CSidebarNavContextProps {
  /**
   * The chain of stable ids of the currently open nav group, from the root to the open leaf.
   */
  openChain: string[]
  setOpenChain: Dispatch<SetStateAction<string[]>>
}

export const CSidebarNavContext = createContext<CSidebarNavContextProps | null>(null)
