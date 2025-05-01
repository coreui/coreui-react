import React from 'react'
import { CImage } from '@coreui/react'

export const ImageAligningExample = () => {
  return (
    <div className="clearfix">
      <CImage align="start" rounded src={'/images/react400.jpg'} width={200} height={200} />
      <CImage align="end" rounded src={'/images/react400.jpg'} width={200} height={200} />
    </div>
  )
}
