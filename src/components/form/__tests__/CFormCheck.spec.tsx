import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CFormCheck } from '../../../index'

test('loads and displays CFormCheck component', async () => {
  const { container } = render(<CFormCheck />)
  expect(container).toMatchSnapshot()
})

test('CFormCheck customize button=false', async () => {
  const { container } = render(
    <CFormCheck
      button={false}
      className="bazinga"
      id="id"
      inline={true}
      label="label"
      size="xl"
      type="radio"
      switch={true}
    />,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('form-check')
  expect(container.firstChild).toHaveClass('form-switch')
  expect(container.firstChild).toHaveClass('form-switch-xl')
  expect(container.firstChild).toHaveClass('form-check-inline')
})

test('CFormCheck customize button=true', async () => {
  const { container } = render(
    <CFormCheck
      button={true}
      className="bazinga"
      buttonColor="primary"
      buttonShape="rounded-circle"
      buttonSize="lg"
      buttonVariant="ghost"
      id="id"
      inline={true}
      label="label"
      size="xl"
      type="radio"
      switch={true}
    />,
  )
  expect(container).toMatchSnapshot()
})
