import React from 'react';
import CFade from '../src/fade/CFade'

import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

export default {
  title: 'CFade'
};

export const basic = () => {

return <>
  <CCol lg="4" md="6" sm="12">
    <CCard>
      <CCardBody>
        <CFade>
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
          Lorem ipsum dolor cet emit. Lorem ipsum dolor cet emit.
        </CFade>
      </CCardBody>
    </CCard>
  </CCol>
</>

}