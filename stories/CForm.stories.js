import React from 'react';
import CForm from '../src/form/CForm'
import CFormGroup from '../src/form/CFormGroup'
import CLabel from '../src/form/CLabel'
import { CInput } from '../src/form/CInput'
import CFormText from '../src/form/CFormText'
import CCard from '../src/card/CCard'
import CCardBody from '../src/card/CCardBody'
import CCol from '../src/grid/CCol'


export default {
  title: 'CForm'
};

export const basic = () => {





  return <>
    <CCol lg="4" md="6" sm="12">
      <CCard>
        <CCardBody>
          <CForm action="" method="post">
            <CFormGroup>
              <CLabel htmlFor="nf-email">Email</CLabel>
                <CInput
                  type="email"
                  id="nf-email"
                  name="nf-email"
                  placeholder="Enter Email.."
                  autoComplete="email"
                />
              <CFormText className="help-block">Please enter your email</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-password">Password</CLabel>
                <CInput
                  type="password"
                  id="nf-password"
                  name="nf-password"
                  placeholder="Enter Password.."
                  autoComplete="current-password"
                />
              <CFormText className="help-block">Please enter your password</CFormText>
            </CFormGroup>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </>
};
