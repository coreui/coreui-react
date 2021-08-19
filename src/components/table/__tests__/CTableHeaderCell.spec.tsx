import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableHeaderCell } from '../../../index'

test('loads and displays CTableHeaderCell component', async () => {
  const { container } = render(<CTableHeaderCell/>)
  expect(container).toMatchSnapshot()
})

test('CTableHeaderCell customize', async () => {
    const { container } = render(
        <CTableHeaderCell
            className="bazinga"
            color="info"
        >
            Test
        </CTableHeaderCell>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})