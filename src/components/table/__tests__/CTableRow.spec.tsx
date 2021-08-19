import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableRow } from '../../../index'

test('loads and displays CTableRow component', async () => {
  const { container } = render(<CTableRow/>)
  expect(container).toMatchSnapshot()
})

test('CTableRow customize', async () => {
    const { container } = render(
        <CTableRow
            className="bazinga"
            active={true}
            align="middle"
            color="info"
        >
            Test
        </CTableRow>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('align-middle')
    expect(container.firstChild).toHaveClass('table-active')
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})