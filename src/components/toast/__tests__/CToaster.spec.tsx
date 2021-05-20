import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CToast, CToaster } from '../../../index'

test('loads and displays CToaster component', async () => {
  const { container } = render(<CToaster>Test</CToaster>)
  expect(container).toMatchSnapshot()
})

test('CToaster customize', async () => {
  const { container } = render(
    <CToaster className="bazinga" placement="bottom-start">
      <CToast autohide={false}>Toast</CToast>
    </CToaster>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('toaster')
  expect(container.firstChild).toHaveClass('toast-container')
  expect(container.firstChild).toHaveClass('p-3')
  expect(container.firstChild).toHaveClass('bottom-0')
  expect(container.firstChild).toHaveClass('start-0')
})
