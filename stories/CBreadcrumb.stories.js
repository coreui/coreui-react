import React from 'react';
import CBreadcrumb from '../src/breadcrumb/CBreadcrumb'
import CBreadcrumbItem from '../src/breadcrumb/CBreadcrumbItem'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'

export default {
  title: 'CBreadcrumb'
};

export const basic = () => <>  
  <CCol lg="12" xs="12">
    <CCard> 
      <CCardBody>
        <CBreadcrumb>
          <CBreadcrumbItem><a href="#">Home</a></CBreadcrumbItem>
          <CBreadcrumbItem><a href="#">Library</a></CBreadcrumbItem>
          <CBreadcrumbItem active>Data</CBreadcrumbItem>
        </CBreadcrumb>
      </CCardBody>
    </CCard>
  </CCol>
</>