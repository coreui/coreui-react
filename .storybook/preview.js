import React from 'react';
import { addDecorator } from '@storybook/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import CRow from '../src/grid/CRow'
import CContainer from '../src/grid/CContainer'
import CCol from '../src/grid/CCol'
import CCard from '../src/card/CCard'
//@import '~@coreui/icons/css/all.css';

addDecorator(story => (
  <>
    <CContainer fluid>
        <CRow> 
            <CCol lg="12" xs="12">
                <CCard lg="12" xs="12"> 
                    <h1 className="ml-3">CoreUI</h1>
                </CCard>
            </CCol>
            {story()}
        </CRow>
    </CContainer>
  </>
));
