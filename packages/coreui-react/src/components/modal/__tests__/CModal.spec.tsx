import * as React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CModal } from '../index'

test('loads and displays CModal component', async () => {
  const { container } = render(<CModal portal={false}>Test</CModal>)
  expect(container).toMatchSnapshot()
})

test('CModal customize', async () => {
  const { container } = render(
    <CModal
      alignment="center"
      className="bazinga"
      duration={100}
      fullscreen="xl"
      scrollable={true}
      size="xl"
      visible={true}
    >
      Test
    </CModal>
  )
  expect(container).toMatchSnapshot()
})

test('CModal dialog close on press ESC', async () => {
  const onClose = vi.fn()
  render(
    <CModal onClose={onClose} portal={false} visible>
      Test
    </CModal>
  )
  expect(onClose).toHaveBeenCalledTimes(0)

  const modal = screen.getByText('Test').closest('.modal')
  expect(modal).toBeInTheDocument()

  if (modal !== null) {
    fireEvent.keyDown(modal, {
      key: 'Escape',
    })

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1)
    })
  }
})

test('CModal calls onClosePrevented only when closing is actually prevented', async () => {
  const onClosePrevented = vi.fn()

  render(
    <CModal backdrop="static" onClosePrevented={onClosePrevented} portal={false} visible>
      Test
    </CModal>
  )

  expect(onClosePrevented).toHaveBeenCalledTimes(0)

  const modal = screen.getByText('Test').closest('.modal') as HTMLElement
  fireEvent.keyDown(modal, { key: 'Escape' })

  await waitFor(() => {
    expect(onClosePrevented).toHaveBeenCalledTimes(1)
    expect(modal).toHaveClass('modal-static')
  })
})

test('CModal does not close when a press started inside the dialog is released over the backdrop area', async () => {
  const onClose = vi.fn()

  render(
    <CModal onClose={onClose} portal={false} visible>
      <div data-testid="content">Test</div>
    </CModal>
  )

  const modal = screen.getByText('Test').closest('.modal') as HTMLElement
  const content = screen.getByTestId('content')

  fireEvent.mouseDown(content)
  fireEvent.mouseUp(modal)
  expect(onClose).toHaveBeenCalledTimes(0)

  fireEvent.mouseDown(modal)
  fireEvent.mouseUp(modal)
  await waitFor(() => {
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

// test('CModal dialog closes when clicking outside the modal', async () => {
//   const onClose = vi.fn()

//   render(
//     <CModal onClose={onClose} portal={false} visible>
//       Test
//     </CModal>,
//   )

//   // Ensure onClose hasn't been called yet
//   expect(onClose).not.toHaveBeenCalled()

//   // Optionally, verify that the modal is in the document
//   const modal = screen.getByText('Test').closest('.modal')
//   expect(modal).toBeInTheDocument()

//   // Simulate a click on the external area (outside the modal)
//   fireEvent.mouseDown(document.body)

//   // Wait for onClose to be called once
//   await waitFor(() => {
//     expect(onClose).toHaveBeenCalledTimes(1)
//   })
// })
