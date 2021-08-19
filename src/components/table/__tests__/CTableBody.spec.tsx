import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableBody } from '../../../index'

test('loads and displays CTableBody component', async () => {
  const { container } = render(<CTableBody/>)
  expect(container).toMatchSnapshot()
})

test('CTableBody customize', async () => {
    const { container } = render(
        <CTableBody
            className="bazinga"
            color="info"
        >
            Test
        </CTableBody>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})