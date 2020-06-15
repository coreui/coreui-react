import React from 'react';
import CWidgetSimple from '../src/widgets/CWidgetSimple'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { text } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetSimple'
};

export const basic = () => {

  const header = text('Header', 'Header text', 'Other')
  const _text = text('Text', 'Text', 'Other')
  const innerText = text('Inner text', 'Lorem ipsum dolor cet emit', 'Other')

  return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetSimple
          header={header}
          text={_text}
        >
          {innerText}
        </CWidgetSimple>
      </CCardBody>
    </CCard>
  </CCol>
  </>
}
