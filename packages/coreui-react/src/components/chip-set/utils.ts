import { ReactElement } from 'react'

import type { CChipProps } from '../chip/CChip'

/**
 * Resolves the value used to identify a chip in a `CChipSet`: its explicit
 * `value` prop, its text children, or the render index as a last resort.
 */
export const resolveChipValue = (chip: ReactElement<CChipProps>, index: number): string => {
  if (chip.props.value !== undefined) {
    return chip.props.value
  }

  if (typeof chip.props.children === 'string') {
    return chip.props.children
  }

  return String(index)
}
