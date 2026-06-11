import { createContext } from 'react'

/**
 * The chain of stable ids of the ancestor nav groups, from the root nav down to (and
 * including) the closest parent `CNavGroup`. An empty array means the consumer is rendered
 * directly under `CSidebarNav`, with no parent group.
 */
export const CNavGroupContext = createContext<string[]>([])
