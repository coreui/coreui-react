import { createContext } from 'react'

export interface CCarouselContextProps {
  setAnimating: (a: boolean) => void
  setCustomInterval: (a: boolean | number) => void
}

export const CCarouselContext = createContext({} as CCarouselContextProps)