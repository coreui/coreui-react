import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeStepsExample = () => {
  return <CFormRange min={0} max={5} step={0.5} label="Example range" defaultValue="3" />
}
