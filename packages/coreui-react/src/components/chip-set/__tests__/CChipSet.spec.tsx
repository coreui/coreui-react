import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CChip } from '../../chip'
import { CChipSet } from '../index'

test('loads and displays CChipSet component', async () => {
  const { container } = render(
    <CChipSet>
      <CChip value="a">A</CChip>
      <CChip value="b">B</CChip>
    </CChipSet>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('chip-set')
})

test('CChipSet passes selectable down to its chips', async () => {
  const { getByText } = render(
    <CChipSet selectable={true}>
      <CChip value="a">A</CChip>
      <CChip value="b">B</CChip>
    </CChipSet>,
  )

  expect(getByText('A')).toHaveAttribute('aria-selected', 'false')
  fireEvent.click(getByText('A'))
  expect(getByText('A')).toHaveClass('active')
})

test('CChipSet allows multiple selected chips by default', async () => {
  const onSelect = jest.fn()
  const { getByText } = render(
    <CChipSet selectable={true} onSelect={onSelect}>
      <CChip value="a">A</CChip>
      <CChip value="b">B</CChip>
    </CChipSet>,
  )

  fireEvent.click(getByText('A'))
  fireEvent.click(getByText('B'))

  expect(getByText('A')).toHaveClass('active')
  expect(getByText('B')).toHaveClass('active')
  expect(onSelect).toHaveBeenLastCalledWith(['a', 'b'])
})

test('CChipSet deselects siblings in single selection mode', async () => {
  const onSelect = jest.fn()
  const { getByText } = render(
    <CChipSet selectable={true} selectionMode="single" onSelect={onSelect}>
      <CChip value="a">A</CChip>
      <CChip value="b">B</CChip>
    </CChipSet>,
  )

  fireEvent.click(getByText('A'))
  fireEvent.click(getByText('B'))

  expect(getByText('A')).not.toHaveClass('active')
  expect(getByText('B')).toHaveClass('active')
  expect(onSelect).toHaveBeenLastCalledWith(['b'])
})

test('CChipSet honors a controlled selected', async () => {
  const { getByText } = render(
    <CChipSet selectable={true} selected={['b']}>
      <CChip value="a">A</CChip>
      <CChip value="b">B</CChip>
    </CChipSet>,
  )

  expect(getByText('A')).not.toHaveClass('active')
  expect(getByText('B')).toHaveClass('active')
})

test('CChipSet forwards filter so a selected chip shows a check icon', async () => {
  const { getByText, container } = render(
    <CChipSet filter={true} selected={['a']}>
      <CChip value="a">A</CChip>
    </CChipSet>,
  )

  expect(getByText('A')).toHaveClass('active')
  expect(container.querySelector('.chip-check')).toBeInTheDocument()
})

test('CChipSet moves focus between chips with the keyboard', async () => {
  const { getByText } = render(
    <CChipSet selectable>
      <CChip value="first">First</CChip>
      <CChip value="second">Second</CChip>
      <CChip value="third">Third</CChip>
    </CChipSet>,
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

  // No cycling past the first chip.
  fireEvent.keyDown(first, { key: 'ArrowLeft' })
  expect(first).toHaveFocus()
})

test('CChipSet mirrors arrow keys in RTL', async () => {
  document.documentElement.dir = 'rtl'

  const { getByText } = render(
    <CChipSet selectable>
      <CChip value="first">First</CChip>
      <CChip value="second">Second</CChip>
    </CChipSet>,
  )

  const first = getByText('First')
  const second = getByText('Second')

  first.focus()
  // In RTL, ArrowLeft moves to the next chip.
  fireEvent.keyDown(first, { key: 'ArrowLeft' })
  expect(second).toHaveFocus()

  fireEvent.keyDown(second, { key: 'ArrowRight' })
  expect(first).toHaveFocus()

  document.documentElement.dir = ''
})

test('CChipSet fires onRemove so the parent can drop the chip', async () => {
  const onRemove = jest.fn()

  const Example = () => {
    const [values, setValues] = React.useState(['a', 'b'])
    return (
      <CChipSet
        removable
        onRemove={(value) => {
          onRemove(value)
          setValues((prev) => prev.filter((item) => item !== value))
        }}
      >
        {values.map((value) => (
          <CChip key={value} value={value}>
            {value.toUpperCase()}
          </CChip>
        ))}
      </CChipSet>
    )
  }

  const { getByText, queryByText } = render(<Example />)

  const removeButton = getByText('A').querySelector('.chip-remove')
  fireEvent.click(removeButton as Element)

  expect(onRemove).toHaveBeenCalledWith('a')
  expect(queryByText('A')).not.toBeInTheDocument()
  expect(getByText('B')).toBeInTheDocument()
})

test('CChipSet with defaultChips removes the chip itself (uncontrolled list)', async () => {
  const onRemove = jest.fn()
  const { getByText, queryByText } = render(
    <CChipSet removable defaultChips={['a', { value: 'b', label: 'B' }]} onRemove={onRemove} />,
  )

  fireEvent.click(getByText('a').querySelector('.chip-remove') as Element)

  expect(onRemove).toHaveBeenCalledWith('a')
  expect(queryByText('a')).not.toBeInTheDocument()
  expect(getByText('B')).toBeInTheDocument()
})

test('CChipSet renders chips from the chips prop (strings and objects)', async () => {
  const { getByText, container } = render(
    <CChipSet
      selectable
      chips={['react', { value: 'vue', label: 'Vue' }, { value: 'ng', label: 'Angular', selectable: false }]}
    />,
  )

  expect(container.querySelectorAll('.chip')).toHaveLength(3)
  expect(getByText('react')).toBeInTheDocument()
  expect(getByText('Vue')).toBeInTheDocument()

  // Per-item override still works with the data-driven API.
  fireEvent.click(getByText('Angular'))
  expect(getByText('Angular')).not.toHaveClass('active')
})

test('CChipSet disables every chip', async () => {
  const { getByText } = render(
    <CChipSet disabled={true} removable={true}>
      <CChip value="a">A</CChip>
    </CChipSet>,
  )

  expect(getByText('A')).toHaveClass('disabled')
})
