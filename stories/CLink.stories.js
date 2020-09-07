import React from 'react';
import CLink from '../src/link/CLink'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'CLink'
};

export const basic = () => {

  const href = text('Href', '', 'Basic')
  const target = select('Target', ['', '_blank'], '', 'Basic')
  const disabled = boolean('Disabled', false, 'Basic')
  const active = boolean('Active', false, 'Basic')

  return  <> 
    <CCol lg="6" xs="12">
      <CCard> 
        <CCardBody>
          <CLink
            href={href}
            target={target}
            disabled={disabled}
            active={active}
          >
            CLink
          </CLink>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}