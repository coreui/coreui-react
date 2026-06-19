import React from 'react'
import {
  CButton,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

export const DropdownMenuContentFormsExample = () => {
  return (
    <CDropdownMenu>
      <CForm className="px-4 py-4">
        <div className="mb-3">
          <CFormLabel htmlFor="exampleDropdownFormEmail1">Email address</CFormLabel>
          <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleDropdownFormPassword1">Password</CFormLabel>
          <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
        </div>
        <div className="mb-3">
          <CFormCheck id="dropdownCheck" label="Remember me" />
        </div>
        <CButton color="primary" type="submit">
          Sign in
        </CButton>
      </CForm>
      <CDropdownDivider />
      <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
      <CDropdownItem href="#">Forgot password?</CDropdownItem>
    </CDropdownMenu>
  )
}
