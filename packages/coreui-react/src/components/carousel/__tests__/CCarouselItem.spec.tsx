import React from 'react'
import type { MockInstance } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CCarousel, CCarouselItem } from '../index'

const isTransition = (type: string) => type === 'transitionstart' || type === 'transitionend'

test('CCarouselItem removes the exact transition listener references on cleanup', async () => {
  const addSpy = vi.spyOn(HTMLElement.prototype, 'addEventListener')
  const removeSpy = vi.spyOn(HTMLElement.prototype, 'removeEventListener')

  const { container, unmount } = render(
    <CCarousel>
      <CCarouselItem>Item-1</CCarouselItem>
      <CCarouselItem>Item-2</CCarouselItem>
    </CCarousel>
  )
  const items = new Set<EventTarget>(container.querySelectorAll('.carousel-item'))
  unmount()

  const handlersOn = (spy: MockInstance) =>
    spy.mock.calls
      .map((args, index) => ({ args, context: spy.mock.contexts[index] }))
      .filter(({ args, context }) => isTransition(args[0]) && items.has(context as EventTarget))
      .map(({ args }) => args[1])

  const added = handlersOn(addSpy)
  const removed = handlersOn(removeSpy)

  expect(added.length).toBeGreaterThan(0)
  for (const handler of added) {
    expect(removed).toContain(handler)
  }

  addSpy.mockRestore()
  removeSpy.mockRestore()
})
