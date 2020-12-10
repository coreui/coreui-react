import React from 'react';
import CWidgetDropdown from '../src/widgets/CWidgetDropdown'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CDropdown from '../src/dropdown/CDropdown'
import CDropdownItem from '../src/dropdown/CDropdownItem'
import CDropdownToggle from '../src/dropdown/CDropdownToggle'
import CDropdownMenu from '../src/dropdown/CDropdownMenu'


import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetDropdown'
};

export const basic = () => {

  const colorOptions = [
    "",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, 'info', 'Other')
  const header = text('Header', 'Header text', 'Other')
  const _text = text('Text', 'Text', 'Other')

return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetDropdown
          color={color}
          header={header}
          text={_text}
        >
          <CDropdown
            className="float-right"
            color="transparent p-0"
            placement="bottom-end"
          >
            <CDropdownToggle>
              More
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCardBody>
    </CCard>
  </CCol>
</>
}
