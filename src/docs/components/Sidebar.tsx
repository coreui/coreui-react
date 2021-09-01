import React, { FC } from 'react'
import PropTypes from 'prop-types'

import { CSidebar, CSidebarBrand, CImage } from '../../index'
import { SidebarNav } from '.'

import { myContext } from './../templates/Docs'

import items from './../nav'
// @ts-expect-error svg file
import logo from './../assets/coreui-react.svg'

interface SidebarProps {
  currentRoute: string
}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <CSidebar
          className="docs-sidebar border-end ps-xl-4 elevation-0"
          position="fixed"
          // selfHiding="md"
          hideBelow="xl"
          size="lg"
          visible={context.sidebarVisible}
          onVisibleChange={(value) => context.setSidebarVisible(value)}
        >
          <CSidebarBrand className="justify-content-start ps-3">
            <CImage className="d-block mt-4 mb-5" src={logo} height={50} />
          </CSidebarBrand>
          <SidebarNav items={items} currentRoute={props.currentRoute} />
        </CSidebar>
      )}
    </myContext.Consumer>
  )
}

Sidebar.propTypes = {
  currentRoute: PropTypes.string.isRequired,
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
