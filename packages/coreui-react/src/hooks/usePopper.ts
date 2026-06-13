import { useCallback, useRef } from 'react'
import { createPopper } from '@popperjs/core'
import type { Instance, Options } from '@popperjs/core'

interface UsePopperOutput {
  popper: Instance | undefined
  initPopper: (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => void
  destroyPopper: () => void
  updatePopper: (options?: Partial<Options>) => void
}

export const usePopper = (): UsePopperOutput => {
  const _popper = useRef<Instance>(undefined)
  const el = useRef<HTMLElement>(null)

  const initPopper = useCallback(
    (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => {
      _popper.current?.destroy()
      _popper.current = createPopper(reference, popper, options)
      el.current = popper
    },
    []
  )

  const destroyPopper = useCallback(() => {
    const popperInstance = _popper.current

    if (popperInstance && el.current) {
      popperInstance.destroy()
    }

    _popper.current = undefined
  }, [])

  const updatePopper = useCallback((options?: Partial<Options>) => {
    const popperInstance = _popper.current

    if (popperInstance && options) {
      popperInstance.setOptions(options)
    }

    if (popperInstance) {
      popperInstance.update()
    }
  }, [])

  return {
    popper: _popper.current,
    initPopper,
    destroyPopper,
    updatePopper,
  }
}
