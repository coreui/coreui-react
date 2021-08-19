import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableDataCell } from '../../../index'

test('loads and displays CTableDataCell component', async () => {
  const { container } = render(<CTableDataCell/>)
  expect(container).toMatchSnapshot()
})

test('CTableDataCell customize', async () => {
    const { container } = render(
        <CTableDataCell
            className="bazinga"
            active={true}
            align="middle"
            color="info"
        >
            Test
        </CTableDataCell>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('align-middle')
    expect(container.firstChild).toHaveClass('table-active')
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})