import { createContext, RefObject } from 'react'
import { Alignments } from './types'

export interface CDropdownContextProps {
  alignment?: Alignments
  container?: DocumentFragment | Element | (() => DocumentFragment | Element | null) | null
  dark?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dropdownToggleRef: RefObject<any | null>
  dropdownMenuRef: RefObject<HTMLDivElement | HTMLUListElement | null>
  setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>
  popper?: boolean
  portal?: boolean
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'
  visible?: boolean
}

export const CDropdownContext = createContext({} as CDropdownContextProps)
