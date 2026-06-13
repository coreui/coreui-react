import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CSearchButton } from '../index'

const originalPlatform = window.navigator.platform

beforeEach(() => {
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: 'MacIntel',
  })
})

afterEach(() => {
  Object.defineProperty(window.navigator, 'platform', {
    configurable: true,
    value: originalPlatform,
  })
})

test('loads and displays CSearchButton component', async () => {
  const { container } = render(<CSearchButton />)
  expect(container).toMatchSnapshot()
})

test('CSearchButton customize', async () => {
  const { container } = render(
    <CSearchButton className="bazinga" placeholder="Command palette" shortcut="meta+k,ctrl+k" />
  )

  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('search-button')
  expect(container.firstChild).toHaveClass('bazinga')
  expect(screen.getByText('Command palette')).toBeInTheDocument()
  expect(screen.getByText('⌘')).toBeInTheDocument()
  expect(screen.getByText('K')).toBeInTheDocument()
})

test('CSearchButton triggers click on matching shortcut', async () => {
  const onClick = jest.fn()
  const onTrigger = jest.fn()

  render(<CSearchButton onClick={onClick} onTrigger={onTrigger} shortcut="meta+k,ctrl+k" />)

  fireEvent.keyDown(document, { key: 'k', metaKey: true })

  expect(onClick).toHaveBeenCalledTimes(0)
  expect(onTrigger).toHaveBeenCalledTimes(1)
})

test('CSearchButton ignores plain typing in editable fields', async () => {
  const onClick = jest.fn()

  render(
    <>
      <input aria-label="Search input" />
      <CSearchButton onClick={onClick} shortcut="k" />
    </>
  )

  fireEvent.keyDown(screen.getByLabelText('Search input'), { key: 'k' })

  expect(onClick).not.toHaveBeenCalled()
})

test('CSearchButton highlights active shortcut keys', async () => {
  render(<CSearchButton shortcut="meta+k,ctrl+k" />)

  fireEvent.keyDown(document, { key: 'Meta', metaKey: true })

  expect(screen.getByText('⌘')).toHaveClass('active')

  fireEvent.keyDown(document, { key: 'k', metaKey: true })

  expect(screen.getByText('⌘')).toHaveClass('active')
  expect(screen.getByText('K')).toHaveClass('active')

  fireEvent.keyUp(document, { key: 'k' })

  expect(screen.getByText('⌘')).not.toHaveClass('active')
  expect(screen.getByText('K')).not.toHaveClass('active')
})

test('CSearchButton triggers onTrigger on click', async () => {
  const onClick = jest.fn()
  const onTrigger = jest.fn()

  render(<CSearchButton onClick={onClick} onTrigger={onTrigger} />)

  fireEvent.click(screen.getByRole('button'))

  expect(onClick).toHaveBeenCalledTimes(1)
  expect(onTrigger).toHaveBeenCalledTimes(1)
})
