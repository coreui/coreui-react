import React from 'react';
import CBadge from '../src/badge/CBadge'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CBadge'
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
  const shapeOptions = [
    '', 'pill'
  ]
  const shape = select('Shape', shapeOptions, '', 'Other')

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CBadge 
            color={color}
            shape={shape}  
          >
            CBadge
          </CBadge>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

export const all = () => 
<>
  <CCol lg="12" xs="12">
    <CCard> 
      <CCardBody>
        <CBadge color="primary">CBadge primary</CBadge>
        <CBadge color="secondary">CBadge secondary</CBadge>
        <CBadge color="success">CBadge success</CBadge>
        <CBadge color="danger">CBadge danger</CBadge>
        <CBadge color="warning">CBadge warning</CBadge>
        <CBadge color="info">CBadge info</CBadge>
        <CBadge color="light">CBadge light</CBadge>
        <CBadge color="dark">CBadge dark</CBadge>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol lg="12" xs="12">
    <CCard> 
      <CCardBody>
        <CBadge color="primary" shape="pill">CBadge primary pill</CBadge>
        <CBadge color="secondary" shape="pill">CBadge secondary pill</CBadge>
        <CBadge color="success" shape="pill">CBadge success pill</CBadge>
        <CBadge color="danger" shape="pill">CBadge danger pill</CBadge>
        <CBadge color="warning" shape="pill">CBadge warning pill</CBadge>
        <CBadge color="info" shape="pill">CBadge info pill</CBadge>
        <CBadge color="light" shape="pill">CBadge light pill</CBadge>
        <CBadge color="dark" shape="pill">CBadge dark pill</CBadge>
      </CCardBody>
    </CCard>
  </CCol>
</>