import React from 'react'
import { CButton, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupCustomSelectExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText as="label" htmlFor="inputGroupSelect01">
          Options
        </CInputGroupText>
        <CFormSelect id="inputGroupSelect01">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CFormSelect id="inputGroupSelect02">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        <CInputGroupText as="label" htmlFor="inputGroupSelect02">
          Options
        </CInputGroupText>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup>
        <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
          <option>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
      </CInputGroup>
      Custom file input# Upload
    </>
  )
}
