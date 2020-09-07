import React from 'react';
import CWidgetProgress from '../src/widgets/CWidgetProgress'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetProgress'
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
  const footer = text('Footer', 'Footer text', 'Other')
  const _text = text('Text', 'Text', 'Other')
  const value = number('Value', 25, {}, 'Other')
  const inverse = boolean('Inverse', false, 'Other')

  return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetProgress
          color={color}
          header={header}
          footer={footer}
          text={_text}
          value={value}
          inverse={inverse}
        >

        </CWidgetProgress>
      </CCardBody>
    </CCard>
  </CCol>
  </>
}
