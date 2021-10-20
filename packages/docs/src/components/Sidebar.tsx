import React, { FC } from 'react'
import PropTypes from 'prop-types'

import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CSidebar,
  CSidebarBrand,
  CImage,
} from '@coreui/react/src/index'
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
          size="lg"
          visible={context.sidebarVisible}
          onVisibleChange={(value) => {
            context.setSidebarVisible(value)
          }}
        >
          <CSidebarBrand className="justify-content-start ps-3">
            <CImage className="d-block mt-4 mb-5" src={logo} height={50} />
          </CSidebarBrand>
          <div className="text-medium-emphasis ms-3 me-5 mb-2 small fw-semibold">Framework:</div>
          <CDropdown className="ms-3 me-5 mb-4">
            <CDropdownToggle color="primary" variant="outline">
              React.js
            </CDropdownToggle>
            <CDropdownMenu className="w-100">
              <CDropdownItem href="#" disabled>
                Angular <span className="badge bg-warning float-end mt-1">Work in Progress</span>
              </CDropdownItem>
              <CDropdownItem href="https://coreui.io/docs/4.0/" target="_blank">
                JavaScript / Vanilla JS
              </CDropdownItem>
              <CDropdownItem href="https://coreui.io/vue/docs/4.0/" target="_blank">
                Vue.js
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
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
