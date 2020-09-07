import React, { useState } from 'react';
import CCollapse from '../src/collapse/CCollapse'

import CCol from '../src/grid/CCol'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCardFooter from '../src/card/CCardFooter'
import CButton from '../src/button/CButton'

export default {
  title: 'CCollapse'
};

export const basic = () => {

  const [collapse, setCollapse] = useState(false);

  const toggle = (e)=>{
    setCollapse(!collapse);
    e.preventDefault();
  }

  return <>
  <CCol lg="6" xs="12"> 
    <CCard>
      <CCollapse
        show={collapse}
      >
        <CCardBody>
          <p>
            Anim pariatur cliche reprehenderit,
            enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred
            nesciunt sapiente ea proident.
          </p>
        </CCardBody>
      </CCollapse>
      <CCardFooter>
        <CButton
          color="primary"
          onClick={toggle}
          className={'mb-1'}
        >
          Toggle Collapse
        </CButton>
      </CCardFooter>
    </CCard>
  </CCol>
</>

};
