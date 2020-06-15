import React from 'react';
import CMedia from '../src/media/CMedia'
import CMediaBody from '../src/media/CMediaBody'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

export default {
  title: 'CMedia'
};

export const basic = () => {

  return  <> 
    <CCol lg="6" xs="12">
      <CCard> 
        <CCardBody>
          <CMedia>
            <img src="https://picsum.photos/1024/480/?image=54" height="50"/>
            <CMediaBody>
              <h5 className="mt-0">Media Title</h5>
              <p>
                Lorem ipsum dolor cet emit dolor ipsum lorem.
              </p>
            </CMediaBody>
          </CMedia>
        </CCardBody>
      </CCard>
    </CCol>
  </>
}
