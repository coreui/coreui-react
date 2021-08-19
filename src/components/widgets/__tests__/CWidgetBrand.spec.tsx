import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CWidgetBrand } from '../../../index'

test('loads and displays CWidgetBrand component', async () => {
  const { container } = render(<CWidgetBrand/>)
  expect(container).toMatchSnapshot()
})

test('CWidgetBrand customize', async () => {
    const { container } = render(
        <CWidgetBrand
            className="bazinga"
            color="info"
            values={[['aaa', 'bbb'], ['ccc', 'ddd']]}
        />
    )
    expect(container).toMatchSnapshot()
    expect(container.firstChild).toHaveClass('bazinga')
    if(container.firstChild === null){
        expect(true).toBe(false)
    }else{
        expect(container.firstChild.firstChild).toHaveClass('position-relative')
        expect(container.firstChild.firstChild).toHaveClass('d-flex')
        expect(container.firstChild.firstChild).toHaveClass('justify-content-center')
        expect(container.firstChild.firstChild).toHaveClass('align-items-center')
        expect(container.firstChild.firstChild).toHaveClass('bg-info')
        expect(container.firstChild.lastChild).toHaveClass('row')
        expect(container.firstChild.lastChild).toHaveClass('text-center')
        if(container.firstChild.lastChild === null || container.firstChild.lastChild.firstChild === null){
            expect(true).toBe(false)
        }else{
            expect(container.firstChild.lastChild.firstChild.firstChild).toHaveClass('fs-5')
            expect(container.firstChild.lastChild.firstChild.firstChild).toHaveClass('fw-semibold')
            expect(container.firstChild.lastChild.firstChild.firstChild).toHaveTextContent('aaa')
            expect(container.firstChild.lastChild.firstChild.lastChild).toHaveClass('text-uppercase')
            expect(container.firstChild.lastChild.firstChild.lastChild).toHaveClass('text-medium-emphasis')
            expect(container.firstChild.lastChild.firstChild.lastChild).toHaveClass('small')
            expect(container.firstChild.lastChild.firstChild.lastChild).toHaveTextContent('bbb')
        }
    }

})