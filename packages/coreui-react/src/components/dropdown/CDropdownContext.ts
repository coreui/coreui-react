import { createContext, RefObject } from 'react'
import { Alignments } from './types'

export interface CDropdownContextProps {
  alignment?: Alignments
  container?: DocumentFragment | Element | (() => DocumentFragment | Element | null) | null
  dark?: boolean
  dropdownMenuRef: RefObject<HTMLDivElement | HTMLUListElement | null>
  dropdownToggleRef: (node: HTMLElement | null) => void
  handleHide?: () => void
  handleShow?: (event?: KeyboardEvent) => void
  popper?: boolean
  portal?: boolean
  variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item'
  visible?: boolean
}

export const CDropdownContext = createContext({} as CDropdownContextProps)
