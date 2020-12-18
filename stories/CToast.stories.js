import React from 'react';
import CToast from '../src/toast/CToast'
import CToaster from '../src/toast/CToaster'
import CToastHeader from '../src/toast/CToastHeader'
import CToastBody from '../src/toast/CToastBody'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'CToast'
};

export const basic = () => {

  const positionOptions = [
    '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
    'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
  ]
  const position = select('Position', positionOptions, 'static', 'Other')
  const show = boolean('Show', true, 'Other')
  const autohide = boolean('Autohide', false, 'Other')
  const fade = boolean('Fade', true, 'Other')
  const closeButton = boolean('Close button', true, 'Other')
  const colorOptions = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark',
    ''
  ]
  const color = select('Color', colorOptions, '', 'Other')

  return <>
    <CCol lg="6" md="8" xs="12">
      <CCard> 
        <CCardBody>
          <CToaster
            position={position}
          >
            <CToast
              show={show}
              autohide={autohide}
              fade={fade}
              color={color}
            >
              <CToastHeader closeButton={closeButton}>
                Toast title
              </CToastHeader>
              <CToastBody>
                Toast body
              </CToastBody>
            </CToast>
          </CToaster>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
