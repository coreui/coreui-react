import * as React from 'react'
import type { MockInstance } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  CSidebar /* , CSidebarNav, CNavLink, CNavGroup, CNavGroupItems, CNavItem */,
} from '../index'

test('loads and displays CSidebar component', async () => {
  const { container } = render(<CSidebar>Test</CSidebar>)
  expect(container).toMatchSnapshot()
})

test('CSidebar customize show', async () => {
  const { container } = render(
    <CSidebar
      className="bazinga"
      narrow={true}
      position="fixed"
      visible={true}
      unfoldable={true}
      overlaid={true}
    >
      Test
    </CSidebar>
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('sidebar')
  expect(container.firstChild).toHaveClass('sidebar-narrow')
  expect(container.firstChild).toHaveClass('sidebar-overlaid')
  expect(container.firstChild).toHaveClass('sidebar-fixed')
  expect(container.firstChild).toHaveClass('sidebar-narrow-unfoldable')
  // expect(container.firstChild).toHaveClass('show')
})

test('CSidebar customize hide', async () => {
  const { container } = render(
    <CSidebar className="bazinga" position="sticky" visible={false} overlaid={false}>
      Test
    </CSidebar>
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('sidebar')
  expect(container.firstChild).toHaveClass('sidebar-sticky')
})

test('CSidebar removes the exact transitionend listener reference on cleanup', async () => {
  const addSpy = vi.spyOn(HTMLElement.prototype, 'addEventListener')
  const removeSpy = vi.spyOn(HTMLElement.prototype, 'removeEventListener')

  const { container, unmount } = render(<CSidebar>Test</CSidebar>)
  const sidebar = container.querySelector('.sidebar')
  unmount()

  const handlersOn = (spy: MockInstance) =>
    spy.mock.calls
      .map((args, index) => ({ args, context: spy.mock.contexts[index] }))
      .filter(({ args, context }) => args[0] === 'transitionend' && context === sidebar)
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
