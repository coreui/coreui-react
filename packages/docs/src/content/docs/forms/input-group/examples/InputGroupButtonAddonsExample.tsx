import React from 'react'
import { CButton, CFormInput, CInputGroup } from '@coreui/react'

export const InputGroupButtonAddonsExample = () => {
  return (
    <>
      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline" id="button-addon1">
          Button
        </CButton>
        <CFormInput
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CFormInput
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <CButton type="button" color="secondary" variant="outline" id="button-addon2">
          Button
        </CButton>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CFormInput placeholder="" aria-label="Example text with two button addons" />
      </CInputGroup>

      <CInputGroup>
        <CFormInput
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
        <CButton type="button" color="secondary" variant="outline">
          Button
        </CButton>
      </CInputGroup>
    </>
  )
}
