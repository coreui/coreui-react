import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableHead } from '../../../index'

test('loads and displays CTableHead component', async () => {
  const { container } = render(<CTableHead/>)
  expect(container).toMatchSnapshot()
})

test('CTableHead customize', async () => {
    const { container } = render(
        <CTableHead
            className="bazinga"
            color="info"
        >
            Test
        </CTableHead>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})