import { useRef } from 'react'
import { createPopper } from '@popperjs/core'
import type { Instance, Options } from '@popperjs/core'

import { executeAfterTransition } from '../utils'

interface UsePopperOutput {
  popper: Instance | undefined
  initPopper: (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => void
  destroyPopper: () => void
}

export const usePopper = (): UsePopperOutput => {
  const _popper = useRef<Instance>()
  const el = useRef<HTMLElement>()

  const initPopper = (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => {
    _popper.current = createPopper(reference, popper, options)
    el.current = popper
  }

  const destroyPopper = () => {
    const popperInstance = _popper.current

    if (popperInstance && el.current) {
      executeAfterTransition(() => {
        popperInstance.destroy()
      }, el.current)
    }

    _popper.current = undefined
  }

  return {
    popper: _popper.current,
    initPopper,
    destroyPopper,
  }
}
