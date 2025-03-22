import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressHeight2Example = () => {
  return (
    <>
      <CProgress height={1}>
        <CProgressBar value={25}></CProgressBar>
      </CProgress>
      <CProgress height={20}>
        <CProgressBar value={25}></CProgressBar>
      </CProgress>
    </>
  )
}
