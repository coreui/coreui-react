import React from 'react'
import { CImage } from '@coreui/react'

import React400Img from './../../../assets/images/react400.jpg'

export const ImageAligningExample = () => {
  return (
    <div className="clearfix">
      <CImage align="start" rounded src={React400Img} width={200} height={200} />
      <CImage align="end" rounded src={React400Img} width={200} height={200} />
    </div>
  )
}
