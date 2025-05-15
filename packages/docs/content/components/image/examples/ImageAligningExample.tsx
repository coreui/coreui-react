import React from 'react'
import { withPrefix } from 'gatsby'
import { CImage } from '@coreui/react'

export const ImageAligningExample = () => {
  return (
    <div className="clearfix">
      <CImage align="start" rounded src={withPrefix('/images/react400.jpg')} width={200} height={200} />
      <CImage align="end" rounded src={withPrefix('/images/react400.jpg')} width={200} height={200} />
    </div>
  )
}
