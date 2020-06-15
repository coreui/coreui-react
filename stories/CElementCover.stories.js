import React from 'react';
import CElementCover from '../src/element-cover/CElementCover'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CElementCover'
};

export const basic = () => {
  const opacityOptions = [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0
  ]
  const opacity = select('Opacity', opacityOptions, 0.4, 'Other')
  return <>
    <CCol lg="4" md="6" sm="12">
      <CCard>
        <CCardBody>
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit. 
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit. 
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          <CElementCover
            opacity={opacity}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
