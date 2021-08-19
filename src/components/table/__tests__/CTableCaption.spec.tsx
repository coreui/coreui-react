import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableCaption } from '../../../index'

test('loads and displays CTableCaption component', async () => {
  const { container } = render(<CTableCaption/>)
  expect(container).toMatchSnapshot()
})

test('CTableCaption customize', async () => {
    const { container } = render(
        <CTableCaption>
            Test
        </CTableCaption>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveTextContent('Test')
})