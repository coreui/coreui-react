import React from 'react'
import { CImage } from '@coreui/react'

import React400Img from './../../../assets/images/react400.jpg'

export const ImageAligning3Example = () => {
  return (
    <div className="text-center">
      <CImage rounded src={React400Img} width={200} height={200} />
    </div>
  )
}
