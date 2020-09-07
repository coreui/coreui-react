import React from 'react';
import CDropdown from '../src/dropdown/CDropdown'
import CDropdownToggle from '../src/dropdown/CDropdownToggle'
import CDropdownMenu from '../src/dropdown/CDropdownMenu'
import CDropdownItem from '../src/dropdown/CDropdownItem'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'


import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CDropdown'
};

export const basic = () => {

  const block = boolean('Block', false, 'Basic')
  const active = boolean('Active', false, 'Basic')
  const disabled = boolean('Disabled', false, 'Basic')
  const pressed = boolean('Pressed', false, 'Basic')

  const shapeOptions = ['', 'square', 'pill']
  const shape = select('Shape', shapeOptions, '', 'Other')
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
  const variantOptions = ['', 'ghost', 'outline']
  const variant = select('Variant', variantOptions, '', 'Other')
  const sizeOptions = ['', 'sm', 'lg']
  const size = select('Size', sizeOptions, '', 'Other')
  const caret = boolean('Caret', true, 'Other')


  return <>
    <CCol lg="6" sm="12">
      <CCard>
        <CCardBody>
          <CDropdown className="mt-2">
            <CDropdownToggle 
              caret={caret}
              block={block}
              active={active}
              disabled={disabled}
              pressed={pressed}
              shape={shape}
              color={color}
              variant={variant}
              size={size}
            >
              Dropdown button
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem header>Header</CDropdownItem>
              <CDropdownItem disabled>Action Disabled</CDropdownItem>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem divider />
              <CDropdownItem>Another Action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CCardBody>
      </CCard>
    </CCol>
  </>
};
