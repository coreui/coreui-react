import React from 'react';
import CButton from '../src/button/CButton'
import CDropdown from '../src/dropdown/CDropdown'
import CDropdownToggle from '../src/dropdown/CDropdownToggle'
import CDropdownMenu from '../src/dropdown/CDropdownMenu'
import CDropdownItem from '../src/dropdown/CDropdownItem'
import CDropdownDivider from '../src/dropdown/CDropdownDivider'
import CDropdownHeader from '../src/dropdown/CDropdownHeader'

import CCard from '../src/card/CCard'
import CCardHeader from '../src/card/CCardHeader'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CRow from '../src/grid/CRow'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CButtonDropdowns'
};

export const single = () => {

  const colorOptions = [
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
  const color = select('Color', colorOptions, 'primary', 'Other')
  const split = boolean('Split', false, 'Other')
  const sizeOption = [
    '',
    'sm',
    'lg',
  ]
  const size = select('Size', sizeOption, '', 'Other')
  const placementOption = [
    '',
    'left',
    'right',
    'top',
    'bottom',
  ]
  const placement = select('Placement', placementOption, 'bottom', 'Other')
  
  return <>
    <CCol lg="6" xs="12">
      <CCard>
        <CCardBody>
          <CDropdown className="m-1">
            <CDropdownToggle 
              split={split}
              color={color}
              size={size}
            >
              Primary
            </CDropdownToggle>
            <CDropdownMenu 
              placement={placement}
            >
              <CDropdownItem header>Header</CDropdownItem>
              <CDropdownItem disabled>Action Disabled</CDropdownItem>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem>Another Action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

export const all = () => {
  return <>
  <CCol lg="12" xs="12">
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Dropdowns
          </CCardHeader>
          <CCardBody>

            <CDropdown className="m-1">
              <CDropdownToggle>
                Dropdown button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr/>

            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="primary">
                Primary
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="secondary">
                Secondary
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="success">
                Success
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="info">
                Info
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="warning">
                Warning
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1 btn-group">
              <CDropdownToggle color="danger">
                Danger
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr/>
            <CDropdown className="m-1">
              <CDropdownToggle split color="primary">
                Primary
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="secondary">
                Secondary
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="success">
                Success
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="info">
                Info
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="warning">
                Warning
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="danger">
                Danger
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr/>

            <CDropdown className="m-1" size="lg">
              <CDropdownToggle color="secondary">
                Large button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            {' '}
            <CDropdown className="m-1">
              <CDropdownToggle split color="secondary" size="lg">
                Large split button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr/>

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary" size="sm">
                Small button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            {' '}
            <CDropdown className="m-1">
              <CDropdownToggle color="secondary" size="sm" split>
                Small split button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr/>

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary">
                Dropup button
              </CDropdownToggle>
              <CDropdownMenu placement="top">
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown className="m-1">
              <CDropdownToggle split color="secondary">
                Split dropup
              </CDropdownToggle>
              <CDropdownMenu placement="top">
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Menus
          </CCardHeader>
          <CCardBody>

            <CDropdown className="m-1 d-inline-block">
              <CDropdownToggle color="secondary">
                Direction Up
              </CDropdownToggle>
              <CDropdownMenu placement="top">
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown className="m-1 d-inline-block">
              <CDropdownToggle color="secondary">
                Direction Left
              </CDropdownToggle>
              <CDropdownMenu placement="left">
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown className="m-1 d-inline-block">
              <CDropdownToggle color="secondary">
                Direction Right
              </CDropdownToggle>
              <CDropdownMenu placement="right">
                <CDropdownHeader>Header</CDropdownHeader>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown className="m-1 d-inline-block">
              <CDropdownToggle color="secondary">
                Default Down
              </CDropdownToggle>
              <CDropdownMenu
                placement="bottom"
                modifiers={[{name: 'flip', enabled: false }]}
              >
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr />

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary">
                This dropdown{'\''}s menu is right-aligned
              </CDropdownToggle>
              <CDropdownMenu placement="right">
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem disabled>Action Disabled</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr />

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary">
                Dropdown with header
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header>Header</CDropdownItem>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr />

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary">
                Dropdown with divider
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem>Another Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr />

            <CDropdown className="m-1">
              <CDropdownToggle color="secondary">
                Dropdown with disabled item
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem disabled>Disabled Action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <hr />

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </CCol>


    </>

}