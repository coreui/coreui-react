import { useRef } from 'react'
import { createPopper } from '@popperjs/core'
import type { Instance, Options } from '@popperjs/core'

interface UsePopperOutput {
  popper: Instance | undefined
  initPopper: (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => void
  destroyPopper: () => void
}

export const usePopper = (): UsePopperOutput => {
  const _popper = useRef<Instance>()

  const initPopper = (reference: HTMLElement, popper: HTMLElement, options: Partial<Options>) => {
    _popper.current = createPopper(reference, popper, options)
  }

  const destroyPopper = () => {
    if (_popper.current) {
      _popper.current.destroy()
    }

    _popper.current = undefined
  }

  return {
    popper: _popper.current,
    initPopper,
    destroyPopper,
  }
}
