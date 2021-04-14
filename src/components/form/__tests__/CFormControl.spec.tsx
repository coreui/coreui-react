import * as React from 'react'
import { render /* ,screen */, fireEvent /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CFormControl } from '../../../index'

test('loads and displays CFormControl component', async () => {
  const { container } = render(<CFormControl />)
  expect(container).toMatchSnapshot()
})

test('CFormControl customize', async () => {
  const { container } = render(
    <CFormControl
      className="bazinga"
      component="h3"
      disabled={true}
      plainText={true}
      readOnly={true}
      size="lg"
      type="color"
      value="value"
    />,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('form-control-plaintext')
  expect(container.firstChild).toHaveClass('form-control-color')
  expect(container.firstChild).toHaveClass('form-control-lg')
})

test('CFormControl customize classNameParent', async () => {
  const { container } = render(
    <CFormControl className="bazinga" classNameParent="classNameParent" />,
  )
  expect(container).toMatchSnapshot()
})

test('CFormControl change input', async () => {
  jest.useFakeTimers()
  const onChange = jest.fn()
  render(<CFormControl onChange={onChange} />)
  expect(onChange).toHaveBeenCalledTimes(0)
  const input = document.querySelector('input')
  if (input !== null) {
    fireEvent.change(input, { target: { value: 'bazinga' } })
  }
  expect(onChange).toHaveBeenCalledTimes(1)
  if (input !== null) {
    fireEvent.change(input, { target: { value: '2' } })
  }
  expect(onChange).toHaveBeenCalledTimes(2)
})
