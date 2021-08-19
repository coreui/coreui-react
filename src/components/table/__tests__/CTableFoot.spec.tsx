import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTableFoot } from '../../../index'

test('loads and displays CTableFoot component', async () => {
  const { container } = render(<CTableFoot/>)
  expect(container).toMatchSnapshot()
})

test('CTableFoot customize', async () => {
    const { container } = render(
        <CTableFoot
            className="bazinga"
            color="info"
        >
            Test
        </CTableFoot>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('table-info')
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveTextContent('Test')
})