import React from 'react';
import CSwitch from '../src/switch/CSwitch'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CSwitch'
};

export const basic = () => {

  const size = select('Size', ['', 'lg', 'sm'], '', 'Other')
  const shape = select('Shape', ['', 'pill', 'square'], '', 'Other')
  const variant = select('Variant', ['', '3d', 'opposite', 'outline'], '', 'Other')
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
  const color = select('Color', colorOptions, 'primary', 'Other')
  const labelOn = text('Label on', '', 'Other')
  const labelOff = text('Label off', '', 'Other')
  const checked = boolean('Checked', true, 'Other')

  return <>
    <CCol lg="6" md="8" xs="12">
      <CCard> 
        <CCardBody>
          <CSwitch
            size={size}
            shape={shape}
            variant={variant}
            color={color}
            value={color}
            labelOn={labelOn}
            labelOff={labelOff}
            checked={checked}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

