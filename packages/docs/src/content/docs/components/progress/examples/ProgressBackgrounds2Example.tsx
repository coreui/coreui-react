import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressBackgrounds2Example = () => {
  return (
    <>
      <CProgress color="success" value={25}>
        <CProgressBar>25%</CProgressBar>
      </CProgress>
      <CProgress color="info" value={50}>
        <CProgressBar className="text-dark">50%</CProgressBar>
      </CProgress>
      <CProgress color="warning" value={75}>
        <CProgressBar className="text-dark">75%</CProgressBar>
      </CProgress>
      <CProgress color="danger" value={100}>
        <CProgressBar>100%</CProgressBar>
      </CProgress>
    </>
  )
}
