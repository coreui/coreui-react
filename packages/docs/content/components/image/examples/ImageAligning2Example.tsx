import React from 'react'
import { CImage } from '@coreui/react'

import React400Img from '@assets/images/react400.jpg'

export const ImageAligning2Example = () => {
  return (
    <div className="clearfix">
      <CImage align="center" rounded src={React400Img} width={200} height={200} />
    </div>
  )
}
