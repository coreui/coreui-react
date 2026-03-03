import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
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
  const onChange = jest.fn()
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
  const onRemove = jest.fn()
  const { container } = render(<CChipInput defaultValue={['React']} onRemove={onRemove} />)

  const removeButton = container.querySelector('.chip-remove') as HTMLButtonElement
  fireEvent.click(removeButton)

  expect(container.querySelectorAll('.chip')).toHaveLength(0)
  expect(onRemove).toHaveBeenCalledWith('React')
})

test('CChipInput selectable chips', async () => {
  const onSelect = jest.fn()
  const { container } = render(<CChipInput defaultValue={['React']} selectable onSelect={onSelect} />)

  const chip = container.querySelector('.chip') as HTMLElement
  fireEvent.click(chip)

  expect(chip).toHaveClass('active')
  expect(onSelect).toHaveBeenCalledWith(['React'])
})
