import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CWidgetProgressIcon } from '../../../index'

test('loads and displays CWidgetProgressIcon component', async () => {
  const { container } = render(<CWidgetProgressIcon/>)
  expect(container).toMatchSnapshot()
})

test('CWidgetProgressIcon customize', async () => {
    const { container } = render(
        <CWidgetProgressIcon
            className="bazinga"
            color="info"
            icon="icon"
            progressColor="warning"
            progressValue={75}
            progressWhite={true}
            title="title"
            textColor="white"
            value="value"
        >
            Test
        </CWidgetProgressIcon>
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bazinga')
    expect(container.firstChild).toHaveClass('card')
    if(container.firstChild === null || container.firstChild.firstChild === null){
        expect(true).toBe(false)
    }else{
        expect(container.firstChild.firstChild).toHaveClass('card-body')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-medium-emphasis-inverse')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('text-end')
        expect(container.firstChild.firstChild.firstChild).toHaveClass('mb-4')
        expect(container.firstChild.firstChild.firstChild).toHaveTextContent('icon')
        expect(container.firstChild.firstChild.lastChild).toHaveClass('mt-3')
        expect(container.firstChild.firstChild.lastChild).toHaveClass('mb-0')
    }
})