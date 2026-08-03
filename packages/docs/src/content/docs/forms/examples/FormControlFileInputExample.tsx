import { CFormInput, CFormLabel } from '@coreui/react'

export const FormControlFileInputExample = () => (
  <>
    <div className="mb-3">
      <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
      <CFormInput type="file" id="formFile" />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
      <CFormInput type="file" id="formFileMultiple" multiple />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
      <CFormInput type="file" id="formFileDisabled" disabled />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
      <CFormInput type="file" size="sm" id="formFileSm" />
    </div>
    <div>
      <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
      <CFormInput type="file" size="lg" id="formFileLg" />
    </div>
  </>
)
