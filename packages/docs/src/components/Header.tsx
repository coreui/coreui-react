import React, { forwardRef } from 'react'
import { DocSearch } from '@docsearch/react'

import CIcon, { CIconSvg } from '@coreui/icons-react'
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
  cilExternalLink,
} from '@coreui/icons'

import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import { AppContext } from './../AppContext'
import { Link } from 'gatsby'

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
            <CHeaderBrand
              as={Link}
              className="d-lg-none"
              to="/"
              aria-label="Go to CoreUI for React.js documentation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 116" height="32">
                <g fill="var(--cui-body-color, currentColor)" fillRule="nonzero">
                  <path d="M96 25.091 57 2.574a12 12 0 0 0-12 0L6 25.091a12.034 12.034 0 0 0-6 10.392v45.034a12.033 12.033 0 0 0 6 10.392l39 22.517a12 12 0 0 0 12 0l39-22.517a12.033 12.033 0 0 0 6-10.392V35.483a12.034 12.034 0 0 0-6-10.392Zm-2 55.426a4 4 0 0 1-2 3.464l-39 22.516a4 4 0 0 1-4 0L10 83.981a4 4 0 0 1-2-3.464V35.483a4 4 0 0 1 2-3.464L49 9.502a4 4 0 0 1 4 0L92 32.02a4 4 0 0 1 2 3.464v45.034Z"></path>
                  <path d="M74.022 71.038h-2.866a4 4 0 0 0-1.925.493L51.95 81.017 32 69.498V46.521l19.95-11.519 17.29 9.455a4 4 0 0 0 1.919.49h2.863a2 2 0 0 0 2-2v-2.711a2 2 0 0 0-1.04-1.755L55.793 27.985a8.04 8.04 0 0 0-7.843.09L28 39.593a8.024 8.024 0 0 0-4 6.929v22.976a8 8 0 0 0 4 6.928l19.95 11.518a8.042 8.042 0 0 0 7.843.088l19.19-10.53a2 2 0 0 0 1.038-1.754v-2.71a2 2 0 0 0-2-2Z"></path>
                </g>
              </svg>
            </CHeaderBrand>
            <CHeaderNav className="me-auto d-none d-xl-flex" role={undefined}>
              <CNavItem href="https://coreui.io/pricing/?framework=react&src=react-docs&cta=coreui-header-pricing">
                Pricing
              </CNavItem>
              <CNavItem
                href="https://coreui.requestshub.com/p/coreui-for-reactjs/roadmap"
                target="blank"
                rel="noopener noreferrer"
              >
                Roadmap
                <CIcon icon={cilExternalLink} className="ms-2" size="sm" />
              </CNavItem>
            </CHeaderNav>
            <div className="docs-search ms-auto">
              <DocSearch
                appId="JIOZIZPLMM"
                indexName="coreui-react"
                apiKey="6e3f7692d2589d042bb40426b75df1b7"
              />
            </div>
            <CHeaderNav className="ms-2 d-none d-sm-flex" role={undefined}>
              <CNavItem
                href="https://github.com/coreui/coreui-react/"
                aria-label="Visit our GitHub"
                target="_blank"
                rel="noopener"
              >
                <CIcon icon={cibGithub} size="xl" />
              </CNavItem>
              <CNavItem
                href="https://x.com/core_ui"
                aria-label="Visit our Twitter"
                target="_blank"
                rel="noopener"
              >
                <CIconSvg size="xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 271">
                    <path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z"></path>
                  </svg>
                </CIconSvg>
              </CNavItem>
              <CNavItem
                href="https://discord.gg/pQRWe5XdGm"
                aria-label="Visit our Discord"
                target="_blank"
                rel="noopener"
              >
                <CIconSvg size="xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path>
                  </svg>
                </CIconSvg>
              </CNavItem>
              <li className="nav-item py-2 py-lg-1">
                <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-body text-opacity-75"></div>
                <hr className="d-lg-none my-2 text-white-50" />
              </li>
              <CDropdown placement="bottom-end" variant="nav-item">
                <CDropdownToggle color="link" caret={false} aria-label="Light/Dark mode switch">
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
              className="d-lg-inline-block ms-md-3"
              color="primary"
              href="https://coreui.io/about/services/?docs=coreui-header-button"
              variant="outline"
            >
              <CIcon className=" me-xxl-2 d-none d-xxl-inline" icon={cilHandshake} /> Hire Us
            </CButton>
            <CButton
              className="d-lg-inline-block ms-md-3"
              color="primary"
              href="https://coreui.io/pricing/?framework=react&docs=coreui-header-button"
            >
              Get CoreUI PRO<span className="d-none d-xxl-inline"> all-access</span> →
            </CButton>
          </CHeader>
        )}
      </AppContext.Consumer>
    </>
  )
})

Header.displayName = 'Header'

export default Header
