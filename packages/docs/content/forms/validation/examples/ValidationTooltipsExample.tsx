import React, { FormEvent, useState } from 'react'
import {
  CCol,
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'

export const ValidationTooltipsExample = () => {
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
      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          defaultValue="Mark"
          feedbackValid="Looks good!"
          id="validationTooltip01"
          label="First name"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormInput
          type="text"
          defaultValue="Otto"
          feedbackValid="Looks good!"
          id="validationTooltip02"
          label="First name"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            aria-describedby="inputGroupPrependFeedback"
            feedbackInvalid="Please choose a username."
            id="validationTooltipUsername"
            required
            tooltipFeedback
          />
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormInput
          type="text"
          aria-describedby="validationTooltip03Feedback"
          feedbackInvalid="Please provide a valid city."
          id="validationTooltip03"
          label="City"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormSelect
          aria-describedby="validationTooltip04Feedback"
          feedbackInvalid="Please select a valid state."
          id="validationTooltip04"
          label="State"
          required
          tooltipFeedback
        >
          <option selected disabled value="">
            Choose...
          </option>
          <option>...</option>
        </CFormSelect>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormInput
          type="text"
          aria-describedby="validationTooltip05Feedback"
          feedbackInvalid="Please provide a valid zip."
          id="validationTooltip05"
          label="Zip"
          required
          tooltipFeedback
        />
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  )
}
