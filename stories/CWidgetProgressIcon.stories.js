import React from 'react';
import CWidgetProgressIcon from '../src/widgets/CWidgetProgressIcon'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetProgressIcon'
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
  const value = number('Value', 25, {}, 'Other')
  const inverse = boolean('Inverse', false, 'Other')

  return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetProgressIcon
          color={color}
          header={header}
          text={_text}
          value={value}
          inverse={inverse}
        >
          Icon
        </CWidgetProgressIcon>
      </CCardBody>
    </CCard>
  </CCol>
  </>
}
