import React from 'react';
import CWidgetBrand from '../src/widgets/CWidgetBrand'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CWidgetBrand'
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
  const color = select('Color', colorOptions, 'primary', 'Other')
  const rightHeader = text('Right header', 'Right header text', 'Other')
  const rightFooter = text('Right footer', 'Right footer text', 'Other')
  const leftHeader = text('Left header', 'Left header text', 'Other')
  const leftFooter = text('Left footer', 'Left footer text', 'Other')

return <>
  <CCol lg="6" md="8" xs="12">
    <CCard> 
      <CCardBody>
        <CWidgetBrand
          color={color}
          rightHeader={rightHeader}
          rightFooter={rightFooter}
          leftHeader={leftHeader}
          leftFooter={leftFooter}
        >
          <p className="m-4">Some brand</p>
        </CWidgetBrand>
      </CCardBody>
    </CCard>
  </CCol>
</>
}
