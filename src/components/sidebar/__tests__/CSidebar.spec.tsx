import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {
  CSidebar /* , CSidebarNav, CNavLink, CNavGroup, CNavGroupItems, CNavItem */,
} from '../../../index'
//import { CCreateNavItem } from '../CCreateNavItem'
//import navigation from '../_nav'

test('loads and displays CSidebar component', async () => {
  const { container } = render(<CSidebar>Test</CSidebar>)
  expect(container).toMatchSnapshot()
})

// test('CSidebar customize hide', async () => {
//   const { container } = render(<CSidebar hide>Test</CSidebar>)
//   expect(container).toMatchSnapshot()
//   expect(container.firstChild).toHaveClass('hide')
// })

test('CSidebar customize show', async () => {
  const { container } = render(
    <CSidebar
      className="bazinga"
      // hide={false}
      narrow={true}
      position="fixed"
      selfHiding="lg"
      show={true}
      unfoldable={true}
    >
      Test
    </CSidebar>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('sidebar')
  expect(container.firstChild).toHaveClass('sidebar-narrow')
  expect(container.firstChild).toHaveClass('sidebar-fixed')
  expect(container.firstChild).toHaveClass('sidebar-self-hiding-lg')
  expect(container.firstChild).toHaveClass('sidebar-narrow-unfoldable')
  expect(container.firstChild).toHaveClass('show')
})

/*
test('CSidebar example', async () => {
  const { container } = render(<CSidebar>
    A
    <CSidebarNav>
      <CNavLink>B</CNavLink>
      <CCreateNavItem
        items={navigation}
        components={{
          CNavGroup,
          CNavGroupItems,
          CNavItem,
          CNavLink,
        }}
      />
      <CNavLink>ccc</CNavLink>
    </CSidebarNav>
  </CSidebar>)
  expect(container).toMatchSnapshot()
})
*/
