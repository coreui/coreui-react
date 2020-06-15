import React from 'react';
import CButtonToolbar from '../src/button/CButtonToolbar'
import CButton from '../src/button/CButton'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CRow from '../src/grid/CRow'


import { select } from '@storybook/addon-knobs';

export default {
  title: 'CButtonToolbar'
};

export const basic = () => {

  const justifyOptions = ['', 'start', 'end', 'between', 'center']
  const justify = select('justify', justifyOptions, '', 'Other')

  return <>
    <CCol lg="6" xs="12">
      <CCard>
        <CCardBody>
          <CButtonToolbar justify={justify}>
            <CButton color="success">Button</CButton>
            <CButton color="info">Button</CButton>
            <CButton color="primary">Button</CButton>
          </CButtonToolbar>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
