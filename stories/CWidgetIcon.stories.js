import React from 'react';
import CWidgetIcon from '../src/widgets/CWidgetIcon'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetIcon'
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
  const iconPadding = boolean('Icon padding', false, 'Other')

  return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetIcon
          color={color}
          header={header}
          text={_text}
          iconPadding={iconPadding}
        >
          Icon
        </CWidgetIcon>
      </CCardBody>
    </CCard>
  </CCol>
  </>
}
