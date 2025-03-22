import React, { forwardRef } from 'react'
import { DocSearch } from '@docsearch/react'

import CIcon from '@coreui/icons-react'
import {
  cibGithub,
  cibOpenCollective,
  cibTwitter,
  cilCloudDownload,
  cilMenu,
  cilSun,
  cilMoon,
  cilContrast,
  cilHandshake,
} from '@coreui/icons'

import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import { AppContext } from './../AppContext'

const Header = forwardRef<HTMLDivElement>(({}, ref) => {
  const { colorMode, setColorMode } = useColorModes('coreui-react-docs-theme')
  return (
    <>
      <AppContext.Consumer>
        {(context) => (
          <CHeader className="mb-5" position="sticky" ref={ref}>
            <CHeaderToggler
              className="ms-md-3"
              aria-label="Close"
              onClick={() =>
                context.setSidebarVisible && context.setSidebarVisible(!context.sidebarVisible)
              }
            >
              <CIcon icon={cilMenu} size="lg" />
            </CHeaderToggler>
            <DocSearch
              appId="JIOZIZPLMM"
              indexName="coreui-react"
              apiKey="6e3f7692d2589d042bb40426b75df1b7"
            />
            <CHeaderNav className="ms-auto" role={undefined}>
              <CNavItem
                href="https://github.com/coreui/coreui-react/"
                aria-label="Visit our GitHub"
              >
                <CIcon icon={cibGithub} size="xl" />
              </CNavItem>
              <CNavItem href="https://twitter.com/core_ui" aria-label="Visit our Twitter">
                <CIcon icon={cibTwitter} size="xl" />
              </CNavItem>
              <CNavItem
                href="https://opencollective.com/coreui"
                aria-label="Visit our OpenCollective"
              >
                <CIcon icon={cibOpenCollective} size="xl" />
              </CNavItem>
              <li className="nav-item py-2 py-lg-1">
                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-body text-opacity-75"></div>
                <hr className="d-lg-none my-2 text-white-50" />
              </li>
              <CDropdown placement="bottom-end" variant="nav-item">
                <CDropdownToggle
                  color="link"
                  caret={false}
                  aria-label="Light/Dark mode switch"
                >
                  {colorMode === 'dark' ? (
                    <CIcon icon={cilMoon} size="xl" />
                  ) : colorMode === 'auto' ? (
                    <CIcon icon={cilContrast} size="xl" />
                  ) : (
                    <CIcon icon={cilSun} size="xl" />
                  )}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    active={colorMode === 'light'}
                    className="d-flex align-items-center"
                    as="button"
                    type="button"
                    onClick={() => setColorMode('light')}
                  >
                    <CIcon className="me-2" icon={cilSun} size="lg" /> Light
                  </CDropdownItem>
                  <CDropdownItem
                    active={colorMode === 'dark'}
                    className="d-flex align-items-center"
                    as="button"
                    type="button"
                    onClick={() => setColorMode('dark')}
                  >
                    <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
                  </CDropdownItem>
                  <CDropdownItem
                    active={colorMode === 'auto'}
                    className="d-flex align-items-center"
                    as="button"
                    type="button"
                    onClick={() => setColorMode('auto')}
                  >
                    <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <li className="nav-item py-2 py-lg-1">
                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-body text-opacity-75"></div>
                <hr className="d-lg-none my-2 text-white-50" />
              </li>
            </CHeaderNav>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/react/docs/getting-started/introduction/"
              variant="outline"
            >
              <CIcon className="me-2" icon={cilCloudDownload} /> Download
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/about/services/?docs=coreui-header-button"
              variant="outline"
            >
              <CIcon className="me-2" icon={cilHandshake} /> Hire Us
            </CButton>
            <CButton
              className="d-lg-inline-block my-2 my-md-0 ms-md-3"
              color="primary"
              href="https://coreui.io/pricing/?framework=react&src=react-docs&cta=coreui-header-button"
            >
              Get CoreUI PRO
            </CButton>
          </CHeader>
        )}
      </AppContext.Consumer>
    </>
  )
})

Header.displayName = 'Header'

export default Header
