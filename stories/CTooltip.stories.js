import React from 'react';
import CTooltip from '../src/tooltip/CTooltip'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'CTooltip'
};

export const basic = () => {

  const content = text('Content', 'Popover text', 'Other')
  const placementOptions = [
    '', 'top-end', 'top', 'top-start',
    'bottom-end', 'bottom', 'bottom-start',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]
  const placement = select('Placement', placementOptions, 'top', 'Other')
  const interactive = boolean('Interactive', false, 'Other') 
  const trigger = text('Trigger', 'mouseenter focus', 'Other')

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CTooltip 
            content={content} 
            placement={placement}
            interactive={interactive}
          >
          <a href="#"> Tooltip example </a>
          </CTooltip>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
