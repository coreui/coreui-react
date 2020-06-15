import React from 'react';
import CAlert from '../src/alert/CAlert'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CAlert'
};


export const single = () => {
  const colorOptions = [
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
  return <>
    <CCol lg="12" xs="12"> 
      <CCard> 
        <CCardBody>
          <CAlert color={color}>Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem.</CAlert>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}


export const all = () => 
<CCol lg="12" xs="12"> 
  <CCard> 
    <CCardBody>
      <CAlert color="primary">CAlert primary</CAlert>
      <CAlert color="secondary">CAlert secondary</CAlert>
      <CAlert color="success">CAlert success</CAlert>
      <CAlert color="danger">CAlert danger</CAlert>
      <CAlert color="warning">CAlert warning</CAlert>
      <CAlert color="info">CAlert info</CAlert>
      <CAlert color="light">CAlert light</CAlert>
      <CAlert color="dark">CAlert dark</CAlert>
    </CCardBody>
  </CCard>
</CCol>
