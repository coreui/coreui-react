import React from 'react'
import { CFormInput } from '@coreui/react'

export const FormInputFileExample = () => {
  return (
    <>
      <div className="mb-3">
        <CFormInput type="file" id="formFile" label="Default file input example" />
      </div>
      <div className="mb-3">
        <CFormInput
          type="file"
          id="formFileMultiple"
          label="Multiple files input example"
          multiple
        />
      </div>
      <div className="mb-3">
        <CFormInput
          type="file"
          id="formFileDisabled"
          label="Disabled file input example"
          disabled
        />
      </div>
      <div className="mb-3">
        <CFormInput type="file" size="sm" id="formFileSm" label="Small file input example" />
      </div>
      <div>
        <CFormInput type="file" size="lg" id="formFileLg" label="Large file input example" />
      </div>
    </>
  )
}
