import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CButtonToolbar, CButtonGroup, CButton } from '../../../index'

test('loads and displays CButtonToolbar component', async () => {
  const { container } = render(<CButtonToolbar></CButtonToolbar>)
  expect(container).toMatchSnapshot()
})

test('CButtonToolbar customize', async () => {
  const { container } = render(
    <CButtonToolbar className="bazinga" role="group" aria-label="Bazinga">
      <CButtonGroup role="group">
        <CButton>1</CButton>
        <CButton>2</CButton>
        <CButton>3</CButton>
      </CButtonGroup>
      <CButtonGroup role="group">
        <CButton>A</CButton>
        <CButton>B</CButton>
        <CButton>C</CButton>
      </CButtonGroup>
    </CButtonToolbar>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('btn-toolbar')
})
