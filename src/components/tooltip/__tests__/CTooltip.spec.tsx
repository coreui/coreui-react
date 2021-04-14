import * as React from 'react'
import { act, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CTooltip, CLink /*, CButton */ } from '../../../index'

test('loads and displays CTooltip component', async () => {
  const { container } = render(
    <CTooltip content="content">
      <CLink>Test</CLink>
    </CTooltip>,
  )
  expect(container).toMatchSnapshot()
})

test('CTooltip customize', async () => {
  const { container } = render(
    <CTooltip trigger="hover" placement="right-end" content="content">
      <CLink className="link">Test</CLink>
    </CTooltip>,
  )
  const link = document.querySelector('.link')
  act(() => {
    if (link !== null) {
      fireEvent.mouseOver(link)
    }
  })
  expect(container).toMatchSnapshot()
})

// test('CTooltip on toggle', async () => {
//   jest.useFakeTimers()
//   const onToggle = jest.fn()
//   render(
//     <CTooltip
//       trigger="click"
//       placement="right-end"
//       content="content"
//       visible={true}
//       onToggle={onToggle}
//     >
//       <CButton>Test</CButton>
//     </CTooltip>,
//   )
//   expect(onToggle).toHaveBeenCalledTimes(0)
//   const btn = document.querySelector('.btn')
//   if (btn !== null) {
//     fireEvent.click(btn)
//   }
//   expect(onToggle).toHaveBeenCalledTimes(1)
// })
