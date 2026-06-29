import React from 'react'
import { CButton, CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'

export const InputGroupCustomFileInputExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CInputGroupText as="label" htmlFor="inputGroupFile01">
          Upload
        </CInputGroupText>
        <CFormInput type="file" id="inputGroupFile01" />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput type="file" id="inputGroupFile02" />
        <CInputGroupText as="label" htmlFor="inputGroupFile02">
          Upload
        </CInputGroupText>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon03">
          Button
        </CButton>
        <CFormInput
          type="file"
          id="inputGroupFile03"
          aria-describedby="inputGroupFileAddon03"
          aria-label="Upload"
        />
      </CInputGroup>

      <CInputGroup>
        <CFormInput
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04">
          Button
        </CButton>
      </CInputGroup>
    </>
  )
}
