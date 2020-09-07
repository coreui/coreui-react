import React from 'react';
import CJumbotron from '../src/jumbotron/CJumbotron'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'CJumbotron'
};

export const basic = () => {

  const fluid = boolean('Fluid', false, 'Basic')

  return  <> 
    <CCol lg="12" xs="12">
      <CCard> 
        <CCardBody>
          <CJumbotron
            fluid={fluid}
          >
            <h1>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
              Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
            </p>
            <p>
              Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
              Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
            </p>
          </CJumbotron>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
