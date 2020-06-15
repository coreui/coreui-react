import React from 'react';
import CCol from '../src/grid/CCol'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'

import { number } from '@storybook/addon-knobs';

export default {
  title: 'CCol'
};

export const basic = () => {

  const numberOptions = {
    range: true,
    min: 1,
    max: 12,
    step: 1,
  }

  const xs = number('XS', 12, numberOptions, 'Other')
  const sm = number('SM', 12, numberOptions, 'Other')
  const md = number('MD', 12, numberOptions, 'Other')
  const lg = number('LG', 12, numberOptions, 'Other')
  const xl = number('XL', 12, numberOptions, 'Other')

return <>
    <CCol
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <CCard color='dark' className="text-white">
        <CCardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p> 
        </CCardBody> 
      </CCard>
    </CCol>
</>

}