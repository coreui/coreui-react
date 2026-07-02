import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CNavGroup, CNavItem } from '../index'
import { CSidebarNav } from '../../sidebar/CSidebarNav'

test('loads and displays CNavGroup component', async () => {
  const { container } = render(<CNavGroup toggler="anchorText" />)
  expect(container).toMatchSnapshot()
})

test('CNavGroup customize', async () => {
  const { container } = render(
    <CNavGroup className="bazinga" toggler="anchorText" visible={true} />
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('nav-group')
  expect(container.firstChild).toHaveClass('bazinga')
  const arr = container.getElementsByClassName('nav-link')
  if (arr.length > 0) {
    expect(arr[0].innerHTML).toBe('anchorText')
  } else {
    expect(true).toBe(false)
  }
})

test('CNavGroup toggles its own visibility when uncontrolled', async () => {
  const { container } = render(
    <CSidebarNav>
      <CNavGroup toggler="anchorText">
        <CNavItem href="#">Item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  )

  const group = container.querySelector('.nav-group') as HTMLElement
  expect(group).not.toHaveClass('show')

  fireEvent.click(container.querySelector('.nav-group-toggle') as HTMLElement)
  expect(group).toHaveClass('show')

  fireEvent.click(container.querySelector('.nav-group-toggle') as HTMLElement)
  expect(group).not.toHaveClass('show')
})

test('CNavGroup follows the visible prop in controlled mode', async () => {
  const { container, rerender } = render(<CNavGroup toggler="anchorText" visible={true} />)
  expect(container.querySelector('.nav-group')).toHaveClass('show')

  rerender(<CNavGroup toggler="anchorText" visible={false} />)
  expect(container.querySelector('.nav-group')).not.toHaveClass('show')
})

test('CNavGroup stays open when the parent rejects the collapse (controlled)', async () => {
  const onVisibleChange = vi.fn()
  const { container } = render(
    <CNavGroup toggler="anchorText" visible={true} onVisibleChange={onVisibleChange} />
  )

  expect(container.querySelector('.nav-group')).toHaveClass('show')

  // Parent keeps `visible` at `true` (rejects the collapse).
  fireEvent.click(container.querySelector('.nav-group-toggle') as HTMLElement)

  expect(onVisibleChange).toHaveBeenCalledWith(false)
  expect(container.querySelector('.nav-group')).toHaveClass('show')
})

test('CNavGroup toggler render function receives visible state', async () => {
  render(<CNavGroup toggler={({ visible }) => <span>{visible ? 'expanded' : 'collapsed'}</span>} />)

  expect(screen.getByText('collapsed')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('link'))

  expect(screen.getByText('expanded')).toBeInTheDocument()
})

test('an active nav link opens its parent group', async () => {
  const { container } = render(
    <CSidebarNav>
      <CNavGroup toggler="anchorText">
        <CNavItem href="#" active>
          Item
        </CNavItem>
      </CNavGroup>
    </CSidebarNav>
  )

  expect(container.querySelector('.nav-group')).toHaveClass('show')
})

test('opening another group closes a controlled group when the parent accepts', async () => {
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(true)
    return (
      <CSidebarNav>
        <CNavGroup toggler="Controlled" visible={visible} onVisibleChange={setVisible}>
          <CNavItem href="#">A</CNavItem>
        </CNavGroup>
        <CNavGroup toggler="Other">
          <CNavItem href="#">B</CNavItem>
        </CNavGroup>
      </CSidebarNav>
    )
  }

  const { container } = render(<Wrapper />)
  const [controlled, other] = Array.from(container.querySelectorAll('.nav-group'))
  expect(controlled).toHaveClass('show')

  fireEvent.click(container.querySelectorAll('.nav-group-toggle')[1] as HTMLElement)

  expect(other).toHaveClass('show')
  expect(controlled).not.toHaveClass('show')
})

test('a locked controlled group stays open when another group opens', async () => {
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(true)
    const onVisibleChange = (value: boolean) => {
      if (value) {
        setVisible(true)
      }
    }
    return (
      <CSidebarNav>
        <CNavGroup toggler="Locked" visible={visible} onVisibleChange={onVisibleChange}>
          <CNavItem href="#">A</CNavItem>
        </CNavGroup>
        <CNavGroup toggler="Other">
          <CNavItem href="#">B</CNavItem>
        </CNavGroup>
      </CSidebarNav>
    )
  }

  const { container } = render(<Wrapper />)
  const [locked, other] = Array.from(container.querySelectorAll('.nav-group'))
  expect(locked).toHaveClass('show')

  fireEvent.click(container.querySelectorAll('.nav-group-toggle')[1] as HTMLElement)

  expect(other).toHaveClass('show')
  expect(locked).toHaveClass('show')
})

test('opening an uncontrolled group collapses its sibling', async () => {
  const { container } = render(
    <CSidebarNav>
      <CNavGroup toggler="A">
        <CNavItem href="#">Item</CNavItem>
      </CNavGroup>
      <CNavGroup toggler="B">
        <CNavItem href="#">Item</CNavItem>
      </CNavGroup>
    </CSidebarNav>
  )

  const [groupA, groupB] = Array.from(container.querySelectorAll('.nav-group'))
  const [togglerA, togglerB] = Array.from(container.querySelectorAll('.nav-group-toggle'))

  fireEvent.click(togglerA as HTMLElement)
  expect(groupA).toHaveClass('show')
  expect(groupB).not.toHaveClass('show')

  fireEvent.click(togglerB as HTMLElement)
  expect(groupA).not.toHaveClass('show')
  expect(groupB).toHaveClass('show')
})

test('reopening a parent restores the open state of its nested subgroups', async () => {
  const { container } = render(
    <CSidebarNav>
      <CNavGroup toggler="A" visible>
        <CNavGroup toggler="B" visible>
          <CNavGroup toggler="C" visible>
            <CNavItem href="#">Item</CNavItem>
          </CNavGroup>
        </CNavGroup>
      </CNavGroup>
    </CSidebarNav>
  )

  const [groupA, groupB, groupC] = Array.from(container.querySelectorAll('.nav-group'))
  expect(groupA).toHaveClass('show')
  expect(groupB).toHaveClass('show')
  expect(groupC).toHaveClass('show')

  const outerToggler = container.querySelectorAll('.nav-group-toggle')[0] as HTMLElement

  // Collapse the parent: the whole branch is hidden.
  fireEvent.click(outerToggler)
  expect(groupA).not.toHaveClass('show')

  // Reopen the parent: nested subgroups come back open (matches vanilla/Vue).
  fireEvent.click(outerToggler)
  expect(groupA).toHaveClass('show')
  expect(groupB).toHaveClass('show')
  expect(groupC).toHaveClass('show')
})

test('nested default-open groups render open and stay independently toggleable', async () => {
  const { container } = render(
    <CSidebarNav>
      <CNavGroup toggler="Group A" visible>
        <CNavGroup toggler="Group B" visible>
          <CNavItem href="#">Item</CNavItem>
        </CNavGroup>
      </CNavGroup>
    </CSidebarNav>
  )

  const [groupA, groupB] = Array.from(container.querySelectorAll('.nav-group'))
  expect(groupA).toHaveClass('show')
  expect(groupB).toHaveClass('show')

  // Collapsing the inner group keeps the outer one open.
  const innerToggler = container.querySelectorAll('.nav-group-toggle')[1] as HTMLElement
  fireEvent.click(innerToggler)
  expect(groupA).toHaveClass('show')
  expect(groupB).not.toHaveClass('show')

  // Collapsing the outer group closes the whole branch.
  const outerToggler = container.querySelectorAll('.nav-group-toggle')[0] as HTMLElement
  fireEvent.click(outerToggler)
  expect(groupA).not.toHaveClass('show')
})
