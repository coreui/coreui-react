import React from 'react'
import {
  CButton,
  CButtonGroup,
  CCol,
  CFormCheck,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'

export const ButtonGroupVerticalExample = () => {
  return (
    <CRow>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
        </CButtonGroup>
      </CCol>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton color="primary">Button</CButton>
          <CButton color="primary">Button</CButton>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CDropdown variant="btn-group">
            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem href="#">Separated link</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CButtonGroup>
      </CCol>
      <CCol>
        <CButtonGroup vertical role="group" aria-label="Vertical button group">
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio1"
            autoComplete="off"
            label="Radio 1"
            defaultChecked
          />
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio2"
            autoComplete="off"
            label="Radio 2"
          />
          <CFormCheck
            type="radio"
            button={{ color: 'danger', variant: 'outline' }}
            name="vbtnradio"
            id="vbtnradio3"
            autoComplete="off"
            label="Radio 3"
          />
        </CButtonGroup>
      </CCol>
    </CRow>
  )
}
