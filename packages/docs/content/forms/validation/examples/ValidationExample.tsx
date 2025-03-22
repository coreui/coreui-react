import React, { FormEvent, useState } from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationExample = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormInput
          type="text"
          defaultValue="Mark"
          feedbackValid="Looks good!"
          id="validationCustom01"
          label="First name"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          defaultValue="Otto"
          feedbackValid="Looks good!"
          id="validationCustom02"
          label="First name"
          required
        />
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText>@</CInputGroupText>
          <CFormInput
            type="text"
            aria-describedby="inputGroupPrependFeedback"
            feedbackValid="Please choose a username."
            id="validationCustomUsername"
            required
          />
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormInput
          type="text"
          aria-describedby="validationCustom03Feedback"
          feedbackInvalid="Please provide a valid city."
          id="validationCustom03"
          label="City"
          required
        />
      </CCol>
      <CCol md={3}>
        <CFormSelect
          aria-describedby="validationCustom04Feedback"
          feedbackInvalid="Please select a valid state."
          id="validationCustom04"
          label="State"
          required
        >
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="text"
          aria-describedby="validationCustom05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="validationCustom05"
          label="Zip"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
