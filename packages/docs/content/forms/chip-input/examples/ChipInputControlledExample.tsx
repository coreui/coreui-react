import React, { useState } from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputControlledExample = () => {
  const [values, setValues] = useState<string[]>(['React'])

  return (
    <>
      <CChipInput value={values} onChange={setValues} placeholder="Controlled chip input" />
      <p className="mt-2 mb-0 small text-body-secondary">Current value: {values.join(', ') || '-'}</p>
    </>
  )
}
