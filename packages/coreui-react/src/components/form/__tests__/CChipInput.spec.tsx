import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CChip } from '../../chip'
import { CChipInput } from '../index'

test('loads and displays CChipInput component', async () => {
  const { container } = render(<CChipInput defaultValue={['React', 'TypeScript']} />)
  expect(container).toMatchSnapshot()
})

test('CChipInput renders internal label', async () => {
  const { getByText } = render(<CChipInput id="skillsInput" label="Skills:" />)

  const label = getByText('Skills:')
  expect(label).toHaveClass('chip-input-label')
  expect(label).toHaveAttribute('for', 'skillsInput')
})

test('CChipInput adds chip on enter', async () => {
  const onChange = vi.fn()
  const { container } = render(<CChipInput onChange={onChange} />)

  const input = container.querySelector('.chip-input-field') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'CoreUI' } })
  fireEvent.keyDown(input, { key: 'Enter' })

  expect(container.querySelectorAll('.chip')).toHaveLength(1)
  expect(container.querySelector('.chip')?.textContent).toContain('CoreUI')
  expect(onChange).toHaveBeenCalledWith(['CoreUI'])
})

test('CChipInput handles separators', async () => {
  const { container } = render(<CChipInput separator="," />)
  const input = container.querySelector('.chip-input-field') as HTMLInputElement

  fireEvent.change(input, { target: { value: 'React,TypeScript,' } })

  expect(container.querySelectorAll('.chip')).toHaveLength(2)
  expect(input.value).toBe('')
})

test('CChipInput removes chip via remove button', async () => {
  const onRemove = vi.fn()
  const { container } = render(<CChipInput defaultValue={['React']} onRemove={onRemove} />)

  const removeButton = container.querySelector('.chip-remove') as HTMLButtonElement
  fireEvent.click(removeButton)

  expect(container.querySelectorAll('.chip')).toHaveLength(0)
  expect(onRemove).toHaveBeenCalledWith('React')
})

test('CChipInput selectable chips', async () => {
  const onSelect = vi.fn()
  const { container } = render(
    <CChipInput defaultValue={['React']} selectable onSelect={onSelect} />
  )

  const chip = container.querySelector('.chip') as HTMLElement
  fireEvent.click(chip)

  expect(chip).toHaveClass('active')
  expect(onSelect).toHaveBeenCalledWith(['React'])
})

test('CChipInput always renders a hidden input for form submission', async () => {
  const { container } = render(<CChipInput defaultValue={['React']} />)

  const hidden = container.querySelector('input[type="hidden"]')
  expect(hidden).not.toBeNull()
  expect(hidden).toHaveAttribute('name')
  expect(hidden).toHaveValue('React')
})

test('CChipInput single selection deselects siblings', async () => {
  const { container } = render(
    <CChipInput defaultValue={['React', 'Vue']} selectable selectionMode="single" />
  )

  const chips = container.querySelectorAll<HTMLElement>('.chip')
  fireEvent.click(chips[0])
  fireEvent.click(chips[1])

  expect(chips[0]).not.toHaveClass('active')
  expect(chips[1]).toHaveClass('active')
})

test('CChipInput ArrowRight on the last chip moves focus to the input', async () => {
  const { container } = render(<CChipInput defaultValue={['React', 'Vue']} />)

  const chips = container.querySelectorAll<HTMLElement>('.chip')
  const lastChip = chips[chips.length - 1]
  const input = container.querySelector('.chip-input-field') as HTMLInputElement
  lastChip.focus()

  fireEvent.keyDown(lastChip, { key: 'ArrowRight' })
  expect(input).toHaveFocus()
})

test('CChipInput ArrowLeft on the last chip moves focus to the input in RTL', async () => {
  document.documentElement.dir = 'rtl'

  const { container } = render(<CChipInput defaultValue={['React', 'Vue']} />)

  const chips = container.querySelectorAll<HTMLElement>('.chip')
  const lastChip = chips[chips.length - 1]
  const input = container.querySelector('.chip-input-field') as HTMLInputElement
  lastChip.focus()

  fireEvent.keyDown(lastChip, { key: 'ArrowLeft' })
  expect(input).toHaveFocus()

  document.documentElement.dir = ''
})

test('CChipInput seeds initial chips from CChip children', () => {
  const { container, getByText } = render(
    <CChipInput>
      <CChip value="React">React</CChip>
      <CChip value="Vue">Vue</CChip>
    </CChipInput>
  )

  expect(container.querySelectorAll('.chip')).toHaveLength(2)
  expect(getByText('React')).toBeInTheDocument()
  expect(getByText('Vue')).toBeInTheDocument()
})
