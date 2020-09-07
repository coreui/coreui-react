import React from 'react';
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CRow from '../src/grid/CRow'
import CCardHeader from '../src/card/CCardHeader'
import CCardFooter from '../src/card/CCardFooter'

import CCardTitle from '../src/card/CCardTitle'
import CCardSubtitle from '../src/card/CCardSubtitle'
import CCardText from '../src/card/CCardText'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CCard'
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
  const colorTwoOptions = [
    "",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "gradient-primary",
    "gradient-secondary",
    "gradient-success",
    "gradient-warning",
    "gradient-danger",
    "gradient-info",
    "gradient-light",
    "gradient-dark"
  ]
  const classNameOptions = [
    '',
    'text-white'
  ]
  const borderColor = select('Border color', colorOptions, '', 'Other')
  const accentColor = select('Accent color', colorOptions, '', 'Other')
  const color = select('Color', colorTwoOptions, '', 'Other')
  const className = select('Class name', classNameOptions, '', 'Other')

  return <>
  <CCol lg="6" xs="12"> 
    <CRow>
      <CCol xs="12" sm="8" md="6">
        <CCard 
          borderColor={borderColor}
          accentColor={accentColor}
          color={color}
          className={className}
        >
          <CCardHeader>
            Header
          </CCardHeader>
          <CCardBody>
            <CCardTitle>
              Title
            </CCardTitle>
            <CCardSubtitle>
              Subtitle
            </CCardSubtitle>
            <CCardText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            Footer
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CCol>
</>
};
