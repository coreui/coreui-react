import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CChip } from '../index'

test('loads and displays CChip component', async () => {
  const { container } = render(<CChip>Test</CChip>)
  expect(container).toMatchSnapshot()
})

test('CChip customize', async () => {
  const { container } = render(
    <CChip
      active={true}
      className="bazinga"
      clickable={true}
      color="warning"
      as="button"
      disabled={true}
      size="lg"
      variant="outline"
    >
      Test
    </CChip>
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('chip')
  expect(container.firstChild).toHaveClass('active')
  expect(container.firstChild).toHaveClass('chip-clickable')
  expect(container.firstChild).toHaveClass('chip-warning')
  expect(container.firstChild).toHaveClass('chip-lg')
  expect(container.firstChild).toHaveClass('chip-outline')
  expect(container.firstChild).toHaveClass('disabled')
})

test('CChip removable', async () => {
  const onRemove = jest.fn()
  const { container } = render(
    <CChip removable={true} ariaRemoveLabel="Remove test" onRemove={onRemove}>
      Test
    </CChip>
  )

  const removeButton = container.querySelector('.chip-remove')
  expect(container).toMatchSnapshot()
  expect(removeButton).toBeInTheDocument()
  removeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  expect(onRemove).toHaveBeenCalled()
})

test('CChip selectable', async () => {
  const onSelect = jest.fn()
  const onDeselect = jest.fn()
  const { getByText } = render(
    <CChip selectable={true} onSelect={onSelect} onDeselect={onDeselect}>
      Selectable
    </CChip>,
  )
  const chip = getByText('Selectable')

  expect(chip).toHaveAttribute('aria-selected', 'false')
  fireEvent.click(chip)
  expect(chip).toHaveClass('active')
  expect(chip).toHaveAttribute('aria-selected', 'true')
  expect(onSelect).toHaveBeenCalledTimes(1)

  fireEvent.keyDown(chip, { key: 'Enter' })
  expect(chip).not.toHaveClass('active')
  expect(chip).toHaveAttribute('aria-selected', 'false')
  expect(onDeselect).toHaveBeenCalledTimes(1)
})

test('CChip keyboard navigation', async () => {
  const { getByText } = render(
    <div>
      <CChip selectable={true}>First</CChip>
      <CChip selectable={true}>Second</CChip>
      <CChip selectable={true}>Third</CChip>
    </div>,
  )

  const first = getByText('First')
  const second = getByText('Second')
  const third = getByText('Third')

  first.focus()
  fireEvent.keyDown(first, { key: 'ArrowRight' })
  expect(second).toHaveFocus()

  fireEvent.keyDown(second, { key: 'End' })
  expect(third).toHaveFocus()

  fireEvent.keyDown(third, { key: 'Home' })
  expect(first).toHaveFocus()
})

test('CChip delete triggers remove callback', async () => {
  const onRemove = jest.fn()
  const { getByText } = render(
    <div>
      <CChip removable={true} onRemove={onRemove}>
        First
      </CChip>
      <CChip removable={true}>Second</CChip>
    </div>,
  )

  const first = getByText('First')
  first.focus()
  fireEvent.keyDown(first, { key: 'Delete' })
  expect(onRemove).toHaveBeenCalledTimes(1)
})
