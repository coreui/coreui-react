import React from 'react';
import CNav from '../src/nav/CNav'
import CNavItem from '../src/nav/CNavItem'
import CNavLink from '../src/nav/CNavLink'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'CNav'
};

export const basic = () => {

  const variant = select('Variant', ['', 'tabs', 'pills'], '', 'Nav')
  const vertical = boolean('Vertical', false, 'Nav')
  const justified = boolean('Justified', false, 'Nav')
  const fill = boolean('Fill', false, 'Nav')
  const inCard = boolean('In card', false, 'Nav') 

  return <>
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CNav 
            variant={variant}
            vertical={vertical}
            justified={justified}
            fill={fill}
            inCard={inCard}
          >
            <CNavItem>
              <CNavLink active>Link</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>Link</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>Link</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink disabled>Disabled</CNavLink>
            </CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
    </CCol>
  </>
};
