// code borrowed from https://github.com/reach/reach-ui
// problem described https://github.com/facebook/react/issues/13029

import { useMemo } from 'react'

export type AssignableRef<ValueType> =
  | {
      bivarianceHack(instance: ValueType | null): void
    }['bivarianceHack']
  | React.MutableRefObject<ValueType | null>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useForkedRef<RefValueType = any>(
  ...refs: (AssignableRef<RefValueType> | null | undefined)[]
) {
  return useMemo(
    () => {
      if (refs.every((ref) => ref == null)) {
        return null
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (node: any) => {
        refs.forEach((ref) => {
          assignRef(ref, node)
        })
      }
    },
    // useForkedRef accepts a variable number of refs, so the dependency list
    // cannot be a static array literal; the refs are compared element-wise.
    // eslint-disable-next-line react-hooks/use-memo, react-hooks/exhaustive-deps
    refs
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assignRef<RefValueType = any>(
  ref: AssignableRef<RefValueType> | null | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
) {
  if (ref == null) return
  if (isFunction(ref)) {
    ref(value)
  } else {
    try {
      ref.current = value
    } catch {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`)
    }
  }
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function'
}
