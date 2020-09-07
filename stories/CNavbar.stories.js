import React, { useState } from 'react';
import CNavbar from '../src/navbar/CNavbar'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CToggler from '../src/toggler/CToggler'
import CNavbarBrand from '../src/navbar/CNavbarBrand'
import CCollapse from '../src/collapse/CCollapse'
import CNavbarNav from '../src/navbar/CNavbarNav'
import CForm from '../src/form/CForm'
import { CInput } from '../src/form/CInput'
import CButton from '../src/button/CButton'
import CDropdown from '../src/dropdown/CDropdown'
import CDropdownToggle from '../src/dropdown/CDropdownToggle'
import CDropdownMenu from '../src/dropdown/CDropdownMenu'
import CDropdownItem from '../src/dropdown/CDropdownItem'
import CNavLink from '../src/nav/CNavLink'


import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CNavbar'
};

export const basic = () => {

  const [isOpen, setIsOpen] = useState(false);

  const light = boolean('Light', false, 'Navbar')
  const colorOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link",
  ]
  const color = select('Color', colorOptions, '', 'Navbar')
  const fixed = select('Fixed', ['', 'top', 'bottom'], '', 'Navbar')
  const sticky = boolean('Sticky', false, 'Navbar')
  const expandable = select('Expandable', ['', false, true, 'xs', 'sm', 'md', 'lg', 'xl'], true, 'Navbar')

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CNavbar 
            expandable={expandable} 
            color={color}
            fixed={fixed}
            sticky={sticky}
            light={light}
          >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
            <CNavbarBrand>
              NavbarBrand
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav>
                <CNavLink>Home</CNavLink>
                <CNavLink>Link</CNavLink>
              </CNavbarNav>
              <CNavbarNav className="ml-auto">
                <CForm inline>
                  <CInput
                    className="mr-sm-2"
                    placeholder="Search"
                    size="sm"
                  />
                  <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
                </CForm>
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    Lang
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>EN</CDropdownItem>
                    <CDropdownItem>ES</CDropdownItem>
                    <CDropdownItem>RU</CDropdownItem>
                    <CDropdownItem>FA</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown
                  inNav
                >
                  <CDropdownToggle color="primary">
                    User
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Account</CDropdownItem>
                    <CDropdownItem>Settings</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCard>
    </CCol>
  </>
};
