import React from 'react';
import CButtonGroup from '../src/button/CButtonGroup'
import CButton from '../src/button/CButton'
import CButtonToolbar from '../src/button/CButtonToolbar'
import CInputGroup from '../src/form/CInputGroup'
import CInputGroupText from '../src/form/CInputGroupText'
import { CInput } from '../src/form/CInput'
import CDropdown from '../src/dropdown/CDropdown'
import CDropdownToggle from '../src/dropdown/CDropdownToggle'
import CDropdownMenu from '../src/dropdown/CDropdownMenu'
import CDropdownItem from '../src/dropdown/CDropdownItem'

import CCard from '../src/card/CCard'
import CCardHeader from '../src/card/CCardHeader'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CRow from '../src/grid/CRow'

import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'CButtonGroup'
};

export const single = () => {

  const sizeOptions = ['', 'sm', 'lg']
  const size = select('Size', sizeOptions, '', 'Other')
  const vertical = boolean('Vertical', false, 'Other')

  return <>
    <CCol lg="12" xs="12">
      <CCard>
        <CCardBody>
          <CButtonGroup 
            size={size}
            vertical={vertical}
          >
            <CButton color="secondary">Left</CButton>
            <CButton color="secondary">Middle</CButton>
            <CButton color="secondary">Right</CButton>
          </CButtonGroup>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}



export const all = () => <>
  <CCol lg="12" xs="12">
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            Button Group
          </CCardHeader>
          <CCardBody>
            <CButtonGroup>
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Button Group
            <small> toolbar</small>
          </CCardHeader>
          <CCardBody>
            <CButtonToolbar className="mb-3">
              <CButtonGroup className="mr-2">
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CButtonGroup className="mr-2">
                <CButton color="secondary">5</CButton>
                <CButton color="secondary">6</CButton>
                <CButton color="secondary">7</CButton>
              </CButtonGroup>
              <CButtonGroup>
                <CButton color="secondary">8</CButton>
              </CButtonGroup>
            </CButtonToolbar>
            <CButtonToolbar className="mb-3">
              <CButtonGroup className="mr-2">
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                <CInput placeholder="Input group example" />
              </CInputGroup>
            </CButtonToolbar>
            <CButtonToolbar justify="between">
              <CButtonGroup>
                <CButton color="secondary">1</CButton>
                <CButton color="secondary">2</CButton>
                <CButton color="secondary">3</CButton>
                <CButton color="secondary">4</CButton>
              </CButtonGroup>
              <CInputGroup>
                  <CInputGroupText>@</CInputGroupText>
                <CInput placeholder="Input group example" />
              </CInputGroup>
            </CButtonToolbar>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Button Group
            <small> vertical variation</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup vertical>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CButton color="secondary">3</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>

      </CCol>
      <CCol md={6}>

        <CCard>
          <CCardHeader>
            Button Group
            <small> sizing</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup size="lg">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br /><br />
            <CButtonGroup>
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br /><br />
            <CButtonGroup size="sm">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Button Group
            <small> nesting</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CDropdown color="secondary">
                <CDropdownToggle caret color="secondary">
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CButtonGroup>
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
            Button Group
            <small> vertical</small>
          </CCardHeader>
          <CCardBody>
            <CButtonGroup vertical>
              <CButton color="secondary">1</CButton>
              <CButton color="secondary">2</CButton>
              <CDropdown>
                <CDropdownToggle color="secondary" caret>
                  Dropdown
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                  <CDropdownItem>Dropdown Link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CButtonGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CCol>
</>;
