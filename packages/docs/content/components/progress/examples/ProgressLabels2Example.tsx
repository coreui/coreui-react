import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressLabels2Example = () => {
  return (
    <CProgress value={10}>
      <CProgressBar className="overflow-visible text-dark px-2" color="success">
        Long label text for the progress bar, set to a dark color
      </CProgressBar>
    </CProgress>
  )
}
