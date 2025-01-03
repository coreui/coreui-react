import * as React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownItemPlain,
  CDropdownHeader,
  CDropdownDivider,
} from '../../../index'

test('loads and displays CDropdown component', async () => {
  const { container } = render(<CDropdown>Test</CDropdown>)
  expect(container).toMatchSnapshot()
})

test('CDropdown customize', async () => {
  const { container } = render(
    <CDropdown
      alignment={{ lg: 'start' }}
      className="bazinga"
      as="h3"
      dark={true}
      direction="dropstart"
      placement="right-end"
      popper={true}
      variant="nav-item"
      visible={true}
    >
      Test
    </CDropdown>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('nav-item')
  expect(container.firstChild).toHaveClass('dropdown')
  expect(container.firstChild).toHaveClass('dropstart')
})

// test('CDropdown change visible prop', async () => {
//   jest.useFakeTimers()
//   const { rerender } = render(<CDropdown visible={false}>Test</CDropdown>)
//   expect(screen.getByText('Test')).not.toHaveClass('show')
//   rerender(<CDropdown visible={true}>Test</CDropdown>)
//   jest.runAllTimers()
//   expect(screen.getByText('Test')).toHaveClass('show')
//   rerender(<CDropdown visible={false}>Test</CDropdown>)
//   expect(screen.getByText('Test')).not.toHaveClass('show')
//   jest.runAllTimers()
//   jest.useRealTimers()
// })

test('CDropdown opens on toggle click and closes on clicking outside', async () => {
  render(
    <div>
      {/* External element to simulate clicking outside the dropdown */}
      <div data-testid="external-area">External Area</div>

      {/* The dropdown component */}
      <CDropdown>
        <CDropdownToggle>Test</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>A</CDropdownItem>
          <CDropdownItem>B</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>,
  )

  // Ensure the dropdown is initially closed
  const toggleButton = screen.getByText('Test')
  expect(toggleButton).toBeInTheDocument()

  // Assuming the 'show' class is applied to the CDropdownMenu
  const dropdownMenu = screen.getByRole('menu', { hidden: true }) // Adjust role if different
  expect(dropdownMenu).not.toHaveClass('show')

  // Click on the toggle to open the dropdown
  fireEvent.click(toggleButton)

  // Wait for the dropdown menu to become visible
  await waitFor(() => {
    const openedMenu = screen.getByRole('menu') // Adjust role if different
    expect(openedMenu).toBeVisible()
    expect(openedMenu).toHaveClass('show')
  })

  // Click outside the dropdown to close it
  const externalArea = screen.getByTestId('external-area')
  fireEvent.mouseUp(externalArea)

  // Wait for the dropdown menu to be hidden
  await waitFor(() => {
    const closedMenu = screen.getByRole('menu', { hidden: true }) // Adjust role if different
    expect(closedMenu).not.toHaveClass('show')
  })
})

test('CDropdown example', async () => {
  jest.useFakeTimers()
  const { container } = render(
    <CDropdown>
      <CDropdownToggle>Test</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownHeader>A</CDropdownHeader>
        <CDropdownItem>B</CDropdownItem>
        <CDropdownItemPlain>C</CDropdownItemPlain>
        <CDropdownDivider />
        <CDropdownItem>D</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>,
  )
  expect(container).toMatchSnapshot()
})
