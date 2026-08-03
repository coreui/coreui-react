import { CFormCheck } from '@coreui/react'

export const ChecksRadiosWithoutLabelsExample = () => (
  <>
    <div>
      <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
    </div>
    <div>
      <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..." />
    </div>
  </>
)
