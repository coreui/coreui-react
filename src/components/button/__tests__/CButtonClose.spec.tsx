import * as React from 'react'
import { render /* ,screen */ /*,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CButtonClose } from '../../../index'

test('loads and displays CButtonClose component', async () => {
  const { container } = render(<CButtonClose>Test</CButtonClose>)
  expect(container).toMatchSnapshot()
})

test('CButtonClose customize', async () => {
  const { container } = render(
    <CButtonClose white={true} disabled={true} className="bazinga">
      Test
    </CButtonClose>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('btn')
  expect(container.firstChild).toHaveClass('btn-close')
  expect(container.firstChild).toHaveClass('btn-close-white')
  expect(container.firstChild).toHaveAttribute('disabled')
})
