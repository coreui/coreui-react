import React from 'react';
import CEmbedItem from '../src/embed/CEmbedItem'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { select } from '@storybook/addon-knobs';

export default {
  title: 'CEmbedItem'
};

export const basic = () => {

  const typeOptions = ['iframe', 'embed', 'video', 'object', 'img']
  const type = select('Type', typeOptions, 'iframe', 'Other')

  return <>
    <CCol lg="4" md="6" sm="12">
      <CCard>
        <CCardBody>
          <CEmbedItem>
            Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
            Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
            Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
            Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          </CEmbedItem>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
