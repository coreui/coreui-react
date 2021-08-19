import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CWidgetDropdown } from '../../../index'

test('loads and displays CWidgetDropdown component', async () => {
  const { container } = render(<CWidgetDropdown/>)
  expect(container).toMatchSnapshot()
})

test('CWidgetDropdown customize', async () => {
    const { container } = render(
        <CWidgetDropdown
            className="bazinga"
            action="action"
            change="change"
            chart="chart"
            color="info"
            title="title"
            value="value"
        >
            Test
        </CWidgetDropdown>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bg-info')
    expect(container.firstChild).toHaveClass('text-high-emphasis-inverse')
    expect(container.firstChild).toHaveClass('bazinga')
    if(container.firstChild === null){
        expect(true).toBe(false)
    }else{
        expect(container.firstChild.firstChild).toHaveClass('pb-0')
        expect(container.firstChild.firstChild).toHaveClass('d-flex')
        expect(container.firstChild.firstChild).toHaveClass('justify-content-between')
        expect(container.firstChild.firstChild).toHaveClass('align-items-start')
        if(container.firstChild.firstChild === null || container.firstChild.firstChild.firstChild === null){
            expect(true).toBe(false)
        }else{
            expect(container.firstChild.firstChild.firstChild.firstChild).toHaveClass('fs-4')
            expect(container.firstChild.firstChild.firstChild.firstChild).toHaveClass('fw-semibold')
            if(container.firstChild.firstChild.firstChild.firstChild === null){
                expect(true).toBe(false)
            }else{
                expect(container.firstChild.firstChild.firstChild.firstChild.lastChild).toHaveClass('fs-6')
                expect(container.firstChild.firstChild.firstChild.firstChild.lastChild).toHaveClass('fw-normal')
                expect(container.firstChild.firstChild.firstChild.firstChild.lastChild).toHaveTextContent('change')
            }
        }
    }

    //expect(container.firstChild).toHaveTextContent('Test')
})