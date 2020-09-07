import React from 'react';
import CPopover from '../src/tooltip/CPopover'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { text } from '@storybook/addon-knobs';

export default {
  title: 'CPopover'
};

export const basic = () => {

  const header = text('Header', 'Popover header', 'Basic')
  const content = text('Content', 'Popover text', 'Basic')

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CPopover 
            header={header} 
            content={content}
          >
            <a>
              Popover example
            </a>
          </CPopover>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
