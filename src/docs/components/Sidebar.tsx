import React, { FC } from 'react'

import { CSidebar, CSidebarBrand, CImage } from '../../index'
import { SidebarNav } from '.'

import items from './../nav'
import logo from './../assets/coreui-react.svg'

const Sidebar: FC = ({ ...props }) => {
  return (
    <CSidebar
      className="docs-sidebar border-end ps-xl-4 elevation-0"
      position="fixed"
      selfHiding="md"
      size="lg"
    >
      <CSidebarBrand className="justify-content-start ps-3">
        <CImage className="d-block mt-4 mb-5" src={logo} height={50} />
      </CSidebarBrand>
      <SidebarNav items={items} />
    </CSidebar>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
