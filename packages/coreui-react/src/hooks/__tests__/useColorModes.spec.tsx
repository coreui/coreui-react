import { renderHook } from '@testing-library/react'
import { useColorModes } from '../useColorModes'

const setupEnv = () => {
  const addEventListener = vi.fn()
  const removeEventListener = vi.fn()
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({ matches: false, addEventListener, removeEventListener })
  )
  const store: Record<string, string> = {}
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = String(value)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      for (const key of Object.keys(store)) {
        delete store[key]
      }
    },
  })
  return { addEventListener, removeEventListener }
}

afterEach(() => vi.unstubAllGlobals())

describe('useColorModes', () => {
  it('removes the matchMedia listener on unmount', () => {
    const { addEventListener, removeEventListener } = setupEnv()

    const { unmount } = renderHook(() => useColorModes('test-color-scheme'))

    expect(addEventListener).toHaveBeenCalledTimes(1)
    const handler = addEventListener.mock.calls[0][1]

    unmount()

    expect(removeEventListener).toHaveBeenCalledWith('change', handler)
  })

  it('does not stack a new listener on every render', () => {
    const { addEventListener } = setupEnv()

    const { rerender } = renderHook(() => useColorModes('test-color-scheme'))
    rerender()
    rerender()

    expect(addEventListener).toHaveBeenCalledTimes(1)
  })
})
