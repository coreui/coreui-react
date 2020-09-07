import React from 'react';
import CEmbed from '../src/embed/CEmbed'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CEmbed'
};

export const basic = () => {

  const ratioOptions = ['21by9', '16by9', '4by3', '1by1']
  const ratio = select('Ratio', ratioOptions, '16by9', 'Other')

  return <>
    <CCol lg="4" md="6" sm="12">
      <CCard>
        <CCardBody>
          <CEmbed
            ratio={ratio}
          >
            <iframe src="https://www.youtube.com/embed/ctV1-yIzZzU" />
          </CEmbed>
        </CCardBody>
      </CCard>
    </CCol>
  </>
};
