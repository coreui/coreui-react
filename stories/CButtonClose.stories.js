import React from 'react';
import CButtonClose from '../src/button/CButtonClose'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CButtonClose'
};

export const basic = () => {

  const buttonClassOptions = [
    '',
    "bg-primary close",
    "bg-secondary close",
    "bg-success close",
    "bg-warning close",
    "bg-danger close",
    "bg-info close",
    "bg-light close",
    "bg-dark close",
    "text-primary close",
    "text-secondary close",
    "text-success close",
    "text-warning close",
    "text-danger close",
    "text-info close",
    "text-light close",
    "text-dark close",
  ]
  const buttonClass = select('Button class', buttonClassOptions, '', 'Other')
  return <>
    <CCol lg="4" md="6" xs="12">
      <CCard> 
        <CCardBody>
          <CButtonClose
            buttonClass={buttonClass}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>

}
