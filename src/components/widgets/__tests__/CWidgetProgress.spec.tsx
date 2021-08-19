import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CWidgetProgress } from '../../../index'

test('loads and displays CWidgetProgress component', async () => {
  const { container } = render(<CWidgetProgress/>)
  expect(container).toMatchSnapshot()
})

test('CWidgetProgress customize', async () => {
    const { container } = render(
        <CWidgetProgress
            className="bazinga"
            color="info"
            progressColor="warning"
            progressValue={75}
            progressWhite={true}
            title="title"
            text="text"
            textColor="white"
            value="value"
        >
            Test
        </CWidgetProgress>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveClass('card')
    if(container.firstChild === null || container.firstChild.firstChild === null){
        expect(true).toBe(false)
    }else{
        expect(container.firstChild.firstChild).toHaveClass('card-body')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('fs-4')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('fw-semibold')
        expect(container.firstChild.firstChild.firstChild).toHaveTextContent('value')
        expect(container.firstChild.firstChild.lastChild).toHaveClass('text-medium-emphasis-inverse')
        expect(container.firstChild.firstChild.lastChild).toHaveTextContent('text')
    }
})