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
  const scrollable = boolean('Scrollable document', true, 'Other')

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
            scrollable={scrollable}
          >
            <CModalHeader closeButton>Modal title</CModalHeader>
            <CModalBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus nibh eget dignissim sodales. Pellentesque a ex volutpat, vulputate augue vitae, ultricies est. Donec lacinia ullamcorper justo, ac mattis turpis tempus non. Sed a nisl quis est aliquam bibendum vitae at libero. Etiam dictum auctor lacus, at blandit libero consectetur non. Donec pulvinar ullamcorper hendrerit. Curabitur vulputate quam eu ligula viverra vestibulum. Praesent tempus ipsum eget orci consectetur, eget elementum mauris vehicula. Cras semper in ipsum et finibus. Donec eu est hendrerit, fermentum nibh ac, sagittis magna. Etiam id elit fermentum, egestas sem et, viverra metus.</p>
              <p>Etiam a sem non massa volutpat hendrerit. Mauris condimentum sapien quis dignissim pellentesque. Quisque condimentum lacinia odio et interdum. Nam auctor tincidunt convallis. Vivamus euismod lectus eu arcu facilisis hendrerit. Mauris faucibus urna sit amet nisi volutpat, eu gravida ex elementum. Fusce sed eros vitae eros ultrices faucibus suscipit vel velit. Donec eu nunc ac nisl interdum sagittis ac a justo.</p>
              <p>Nullam mollis pharetra sagittis. Ut porta lacus vitae sem mollis, ut venenatis dui porta. Morbi nec enim quis nibh pretium sollicitudin non ut augue. Etiam fermentum neque ligula, eu aliquam ante aliquet a. Morbi ut ultrices velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse efficitur eros in ipsum porta, id finibus odio tincidunt. Proin in consequat diam.</p>
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
