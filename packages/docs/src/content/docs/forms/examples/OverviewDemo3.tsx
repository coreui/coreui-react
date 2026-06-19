import {
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormText,
  CCol,
  CRow,
} from '@coreui/react'

export const OverviewDemo3 = () => (
<>
<CForm>
    <fieldset disabled>
      <legend>Disabled fieldset example</legend>
      <div className="mb-3">
        <CFormLabel htmlFor="disabledTextInput">Disabled input</CFormLabel>
        <CFormInput id="disabledTextInput" placeholder="Disabled input" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="disabledSelect">Disabled select menu</CFormLabel>
        <CFormSelect id="disabledSelect">
          <option>Disabled select</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormCheck id="disabledFieldsetCheck" label="Can't check this" disabled />
      </div>
      <CButton color="primary" type="submit">Submit</CButton>
    </fieldset>
  </CForm>
</>
)
