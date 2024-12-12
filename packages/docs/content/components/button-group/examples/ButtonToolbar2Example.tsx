import React from 'react'
import {
  CButton,
  CButtonGroup,
  CButtonToolbar,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

export const ButtonToolbar2Example = () => {
  return (
    <>
      <CButtonToolbar className="mb-3" role="group" aria-label="Toolbar with button groups">
        <CButtonGroup className="me-2" role="group" aria-label="First group">
          <CButton color="secondary" variant="outline">
            1
          </CButton>
          <CButton color="secondary" variant="outline">
            2
          </CButton>
          <CButton color="secondary" variant="outline">
            3
          </CButton>
          <CButton color="secondary" variant="outline">
            4
          </CButton>
        </CButtonGroup>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </CInputGroup>
      </CButtonToolbar>
      <CButtonToolbar
        className="justify-content-between"
        role="group"
        aria-label="Toolbar with button groups"
      >
        <CButtonGroup className="me-2" role="group" aria-label="First group">
          <CButton color="secondary" variant="outline">
            1
          </CButton>
          <CButton color="secondary" variant="outline">
            2
          </CButton>
          <CButton color="secondary" variant="outline">
            3
          </CButton>
          <CButton color="secondary" variant="outline">
            4
          </CButton>
        </CButtonGroup>
        <CInputGroup>
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
        </CInputGroup>
      </CButtonToolbar>
    </>
  )
}
