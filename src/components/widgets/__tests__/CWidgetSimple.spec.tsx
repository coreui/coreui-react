import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CWidgetSimple } from '../../../index'

test('loads and displays CWidgetSimple component', async () => {
  const { container } = render(<CWidgetSimple/>)
  expect(container).toMatchSnapshot()
})

test('CWidgetSimple customize', async () => {
    const { container } = render(
        <CWidgetSimple
            className="bazinga"
            title="title"
            value="value"
        >
            Test
        </CWidgetSimple>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveClass('card')
    if(container.firstChild === null || container.firstChild.firstChild === null){
        expect(true).toBe(false)
    }else{
        expect(container.firstChild.firstChild).toHaveClass('card-body')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-medium-emphasis')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('small')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-uppercase')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('fw-semibold')
        expect(container.firstChild.firstChild.firstChild).toHaveTextContent('title')
        expect(container.firstChild.firstChild.lastChild).toHaveTextContent('Test')
    }
})