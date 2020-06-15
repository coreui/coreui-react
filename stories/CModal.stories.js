import React, { useState } from 'react';
import CModal from '../src/modal/CModal'
import CModalHeader from '../src/modal/CModalHeader'
import CModalBody from '../src/modal/CModalBody'
import CModalFooter from '../src/modal/CModalFooter'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'
import CButton from '../src/button/CButton'

import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'CModal'
};

export const basic = () => {

  const [modal, setModal] = useState(false);
  const toggle = ()=>{
    setModal(!modal);
  }

  const centered = boolean('Centered', false, 'Other')
  const size = select('Size', ['', 'sm', 'lg', 'xl'], '', 'Other')
  const backdrop = boolean('Backdrop', true, 'Other')
  const colorOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const color = select('Color', colorOptions, '', 'Other')
  const borderColorOptions = [
    '',
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ]
  const borderColor = select('Border color', borderColorOptions, '', 'Other')
  const fade = boolean('Fade', true, 'Other')
  const closeOnBackdrop = boolean('Close on backdrop', true, 'Other')

  return <>
    <CCol lg="6" xs="12">
      <CCard> 
        <CCardBody>
          <CButton
            color="secondary"
            onClick={toggle}
          >Launch demo modal</CButton>
          <CModal
            show={modal}
            onClose={toggle}
            centered={centered}
            size={size}
            backdrop={backdrop}
            color={color}
            borderColor={borderColor}
            fade={fade}
            closeOnBackdrop={closeOnBackdrop}

          >
            <CModalHeader closeButton>Modal title</CModalHeader>
            <CModalBody>
              Lorem ipsum dolor...
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                onClick={toggle}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
