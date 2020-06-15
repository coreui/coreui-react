import React from 'react';
import CSpinner from '../src/spinner/CSpinner'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CSpinner'
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
  const color = select('Color', colorOptions, 'primary', 'Other')
  const grow = boolean('Grow', false, 'Other')
  const size = select('Size', ['', 'sm'], '', 'Other')

  return <>
    <CCol lg="6" md="8" xs="12">
      <CCard> 
        <CCardBody>
          <CSpinner 
            color={color} 
            size={size}
            grow={grow} 
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
