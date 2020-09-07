import React from 'react';
import { CInput } from '../src/form/CInput'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'CInput'
};

export const basic = () => {

  const plaintext = boolean('Plaintext', false, 'Basic')
  const size = select('Size', ['', 'sm', 'lg'], '', 'Basic')
  const valid = boolean('Valid', false, 'Basic')
  const invalid = boolean('Invalid', false, 'Basic')

  return <>
    <CCol lg="4" md="6" sm="12">
      <CCard>
        <CCardBody>
          <CInput
            plaintext={plaintext}
            size={size}
            valid={valid}
            invalid={invalid}
          />
        </CCardBody>
      </CCard>
    </CCol>
  </>
}

