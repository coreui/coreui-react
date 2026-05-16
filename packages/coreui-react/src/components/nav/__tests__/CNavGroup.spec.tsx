import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CNavGroup } from '../index'
import { CSidebarNavContext } from '../../sidebar/CSidebarNavContext'

test('loads and displays CNavGroup component', async () => {
  const { container } = render(<CNavGroup toggler="anchorText" />)
  expect(container).toMatchSnapshot()
})

test('CNavGroup customize', async () => {
  const { container } = render(
    <CNavGroup className="bazinga" toggler="anchorText" visible={true} idx="1" />
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('nav-group')
  expect(container.firstChild).toHaveClass('bazinga')
  const arr = container.getElementsByClassName('nav-link')
  if (arr.length > 0) {
    //expect(arr[0].innerText).toHaveTextContent('anchorText')
    expect(arr[0].innerHTML).toBe('anchorText')
  } else {
    expect(true).toBe(false)
  }
})

test('CNavGroup stays expanded when visible prop is set', async () => {
  render(
    <CSidebarNavContext.Provider value={{ visibleGroup: '', setVisibleGroup: jest.fn() }}>
      <CNavGroup idx="1" toggler="anchorText" visible={true} />
    </CSidebarNavContext.Provider>
  )

  expect(screen.getByRole('listitem')).toHaveClass('show')
})

test('CNavGroup toggler render function receives visible state', async () => {
  render(
    <CSidebarNavContext.Provider value={{ visibleGroup: '1', setVisibleGroup: jest.fn() }}>
      <CNavGroup
        idx="1"
        toggler={({ visible }) => <span>{visible ? 'expanded' : 'collapsed'}</span>}
      />
    </CSidebarNavContext.Provider>
  )

  expect(screen.getByText('expanded')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('link'))

  expect(screen.getByText('collapsed')).toBeInTheDocument()
})
