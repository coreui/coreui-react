import React from 'react';
import CCallout from '../src/callout/CCallout'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CCallout'
};

export const basic = () => {

  const colorOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, '', 'Other')

  return <>
    <CCol lg="4" md="6" xs="12">
      <CCard>
        <CCardBody>
          Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit. 
          Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit.
          <CCallout color={color}>
            Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit. 
            Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit. 
            Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit. 
          </CCallout>
          Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit. 
          Lorem ipsum dolor cet emit. Emit cet dolor ipsum lorem. Ipsum cet Emit.
        </CCardBody>
      </CCard>
    </CCol>
  </>
}