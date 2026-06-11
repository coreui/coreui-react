import { createContext, Dispatch, SetStateAction } from 'react'

export interface CNavGroupContextValue {
  /**
   * The id of the currently open child group at this level, or `undefined` when none is open.
   * Each `CNavGroup` keeps its own accordion state, so collapsing an ancestor never discards the
   * open/closed state of its descendants—reopening the ancestor restores them.
   */
  activeId: string | undefined
  /**
   * Open (or, with `undefined`, close) a child group at this level. Opening a group collapses its
   * siblings, mirroring the vanilla `groupsAutoCollapse` behavior.
   */
  setActiveId: Dispatch<SetStateAction<string | undefined>>
  /**
   * Open the whole branch from the parent group up to the root. Used by an active nav link to
   * reveal every ancestor group.
   */
  openBranch: () => void
}

/**
 * Provides the per-level accordion state to the direct children (`CNavGroup`, `CNavLink`) of a
 * `CSidebarNav` or a parent `CNavGroup`. `null` means the consumer is rendered outside a sidebar
 * navigation, in which case groups fall back to their own local state.
 */
export const CNavGroupContext = createContext<CNavGroupContextValue | null>(null)
